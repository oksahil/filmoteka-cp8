import '/src/sass/index.scss';
import Notiflix from 'notiflix';
import { filmTemplate } from './js/film-template-lib';

var debounce = require('lodash.debounce');
import { setLocalSt, getLocalSt, remLocalSt } from './js/localStorage';

const DEBOUNCE_DELAY = 300;
const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

const refs = {
  input: document.querySelector('.search-input'),
  list: document.querySelector('.film-list'),
  watched: document.querySelector('.watched-btn'),
  queue: document.querySelector('.queue-btn'),
  libraryList: document.querySelector('.films-list'),
};

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const renderLibraryFilms = (arr, key) => {
  const markup = arr.map(obj => filmTemplate(obj)).join('');

  refs.list.insertAdjacentHTML('beforeend', markup);
};

if (getLocalSt(WATCHED_KEY)) {
  refs.list.innerHTML = '';
  const watchFilm = [...getLocalSt(WATCHED_KEY)];
  renderLibraryFilms(watchFilm, WATCHED_KEY);
}
if (getLocalSt(QUEUE_KEY)) {
  refs.list.innerHTML = '';
  const queueFilm = [...getLocalSt(QUEUE_KEY)];
  renderLibraryFilms(queueFilm, QUEUE_KEY);
}

const onWatched = () => {
  refs.list.innerHTML = '';
  const watchFilm = [...getLocalSt(WATCHED_KEY)];
  renderLibraryFilms(watchFilm, WATCHED_KEY);
};

const onQueue = () => {
  refs.list.innerHTML = '';
  const queueFilm = [...getLocalSt(QUEUE_KEY)];
  renderLibraryFilms(queueFilm, QUEUE_KEY);
};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
