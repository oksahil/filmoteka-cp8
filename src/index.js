import '/src/sass/index.scss';
// import Notiflix from 'notiflix';
import { filmTemplate } from '/src/js/film-templete';
import { fetchFilmPopularity } from '/src/js/fetch-film-popularity';
import { fetchFilmInfo } from '/src/js/fetch-film-info';
import { fetchFilm } from '/src/js/fetch-film';
import { listg } from '/src/js/fetch-genres';
import { createPagination, destroyPagination } from './js/pagination';
// import './js/auth';
import imgTemplate from '/src/images/BOX.jpg';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 750;
export const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
export const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

export const refs = {
  input: document.querySelector('.search-input'),
  list: document.querySelector('.film-list'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  card: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  cardList: document.querySelector('.card-list'),
  error: document.querySelector('.error'),
  searchForm: document.querySelector('.search-form'),
  modalBody: document.querySelector('body'),
  paginationBtn: document.querySelector('.pagination-buttons'),
  watched: document.querySelector('.add-watched-btn'),
  queue: document.querySelector('.add-queue-btn'),
};

// вызывает основную функцию когда - DOM content is loaded
document.addEventListener('DOMContentLoaded', main);

// функция для популярных фильмов и пагинации
async function renderPopularFilms() {
  // и так понятно что делает
  const filmsData = await fetchFilmPopularity();

  // создание кнопок + всего страниц + количество отображаемых кнопок + текущая кнопка
  const paginationButtons = createPagination(
    // количество страниц
    filmsData.total_pages,
    // отображается страниц
    5,
    // текущая страница
    filmsData.page
  );

  // указываем рендеру кнопок класс где создавать
  paginationButtons.render(document.querySelector('.pagination-wrapper'));

  // слушаем на какую кнопку было нажатие и передаем её
  paginationButtons.onChange(e => {
    fetchFilmPopularity(e.target.value);
    refs.list.innerHTML = '';
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

    // убирает пробелы + проверка, если инпут не пустой и если в ответе страниц больше 0
    const inputText = e.target.value.trim();
    if (inputText !== '') {
      refs.list.innerHTML = '';
      const filmsData = await fetchFilm(inputText, 1);

      // если страниц больше 0 создаем кнопки
      if (filmsData.total_pages > 0) {
        paginationButtons = createPagination(
          // количество страниц
          filmsData.total_pages,
          // отображается страниц
          5,
          // текущая страница
          filmsData.page
        );
        // указываем рендеру кнопок класс где создавать
        paginationButtons.render(document.querySelector('.pagination-wrapper'));

        // слушаем на какую кнопку было нажатие, передаем её и текст с инпута
        paginationButtons.onChange(e => {
          fetchFilm(inputText, e.target.value);
          refs.list.innerHTML = '';
        });
      } else {
        // удаление кнопок если проверка не прошла
        destroyPagination();
        // fetchFilmPopularity();
        // refs.error.textContent = '';
      }
    }
  };
  // debounce для input
  const renderFilmsWithDebounce = debounce(
    renderFilmsOnInputChange,
    DEBOUNCE_DELAY
  );
  // слушатель input с debounce
  input.addEventListener('input', renderFilmsWithDebounce);
}

// основная функция, вызывается когда HTML документ полностью загрузился
async function main() {
  // делает e.preventDefault() и все
  refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
  });

  initInputListener();
  renderPopularFilms();
}

export let items = [];
export let strGenres = [];

export function renderIds(genre_ids, listg) {
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
