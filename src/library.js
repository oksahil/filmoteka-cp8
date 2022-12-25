import '/src/sass/index.scss';

import { filmTemplate } from './js/film-templete';
import { refs } from './index';



import { getLocalSt } from './js/localStorage';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const renderLibraryFilms = (arr) => {
  const markup = arr.map(obj => filmTemplate(obj)).join('');

  refs.list.insertAdjacentHTML('beforeend', markup);
};

if (getLocalSt(WATCHED_KEY)) {
  refs.list.innerHTML = '';
  const watchFilm = [...getLocalSt(WATCHED_KEY)];
  renderLibraryFilms(watchFilm);
}
if (getLocalSt(QUEUE_KEY)) {
  refs.list.innerHTML = '';
  const queueFilm = [...getLocalSt(QUEUE_KEY)];
  renderLibraryFilms(queueFilm);
}

const onWatched = () => {
  refs.list.innerHTML = '';
  const watchFilm = [...getLocalSt(WATCHED_KEY)];
  renderLibraryFilms(watchFilm);
};

const onQueue = () => {
  refs.list.innerHTML = '';
  const queueFilm = [...getLocalSt(QUEUE_KEY)];
  renderLibraryFilms(queueFilm);
};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
