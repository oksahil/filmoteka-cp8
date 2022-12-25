import '/src/sass/index.scss';
import Notiflix from 'notiflix';
import { filmTemplate } from './js/film-templete';
import { refs, URL, KEY } from './index';

import { setLocalSt, getLocalSt, remLocalSt } from './js/localStorage';

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
// if (getLocalSt(QUEUE_KEY)) {
//   refs.list.innerHTML = '';
//   const queueFilm = [...getLocalSt(QUEUE_KEY)];
//   renderLibraryFilms(queueFilm, QUEUE_KEY);
// }

// const onWatched = () => {
//   refs.list.innerHTML = '';
//   const watchFilm = [...getLocalSt(WATCHED_KEY)];
//   renderLibraryFilms(watchFilm, WATCHED_KEY);
// };

// const onQueue = () => {
//   refs.list.innerHTML = '';
//   const queueFilm = [...getLocalSt(QUEUE_KEY)];
//   renderLibraryFilms(queueFilm, QUEUE_KEY);
// };

// refs.watched.addEventListener('click', onWatched);
// refs.queue.addEventListener('click', onQueue);
