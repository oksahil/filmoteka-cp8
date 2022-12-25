import '/src/sass/index.scss';
import Notiflix from 'notiflix';
import { render } from '/src/index';
import { refs } from '/src/index';

var debounce = require('lodash.debounce');
import { setLocalSt, getLocalSt, remLocalSt } from './js/localStorage';

const DEBOUNCE_DELAY = 300;
const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const onWatched = () => {
  const watchFilm = getLocalSt(WATCHED_KEY);
  render(watchFilm);
};

const onQueue = () => {};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
