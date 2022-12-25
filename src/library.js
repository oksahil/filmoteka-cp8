import '/src/sass/index.scss';
import Notiflix from 'notiflix';
import { refs, DEBOUNCE_DELAY, KEY, URL } from './index';
import { setLocalSt, getLocalSt, remLocalSt } from './js/localStorage';
var debounce = require('lodash.debounce');



const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
const onWatched = () => {
  const watchFilm = getLocalSt(WATCHED_KEY);
  render(watchFilm);
};

const onQueue = () => {};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
