import '/src/sass/index.scss';
import { imgTemplate } from '/src/images/BOX.jpg';
// import Notiflix from 'notiflix';
// import { filmTemplate } from './js/film-templete';
// import { refs } from './index';

import { getLocalSt } from './js/localStorage';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const watched = document.querySelector('.watched-btn');

const queue = document.querySelector('.queue-btn');
const listLib = document.querySelector('.film-list');
const galleryLib = document.querySelector('.gallery-library');
const errorDiv = document.querySelector('.error-div');

watched.focus();

//----------------------------------------Render------------------------

const filmTemplated = ({
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
  const genrNamesArr = genres.map(genre => genre.name);
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

const renderLibraryFilms = (arr) => {
  const markup = arr.map(obj => filmTemplated(obj)).join('');

  listLib.insertAdjacentHTML('beforeend', markup);
};

//----------------------------------Checks--------------------------------

if (getLocalSt(WATCHED_KEY)) {
  galleryLib.classList.remove('empty');
  listLib.innerHTML = '';
  const watchFilm = [...getLocalSt(WATCHED_KEY)];
  renderLibraryFilms(watchFilm);
}
if (getLocalSt(WATCHED_KEY).every(obj => obj.length === 0)) {
  galleryLib.classList.add('empty');
} else if (getLocalSt(QUEUE_KEY).every(obj => obj.length === 0)) {
  galleryLib.classList.add('empty');
}
    

if (galleryLib.classList.contains('empty')) {
  errorDiv.classList.remove('is-hidden');
} else {
  errorDiv.classList.add('is-hidden');
}


//-------------------------------------Library----------------------------------

const onWatched = () => {
  listLib.innerHTML = '';
  const watchFilm = [...getLocalSt(WATCHED_KEY)];
  renderLibraryFilms(watchFilm);
};

const onQueue = () => {
  listLib.innerHTML = '';
  const queueFilm = [...getLocalSt(QUEUE_KEY)];
  renderLibraryFilms(queueFilm);
};

watched.addEventListener('click', onWatched);
queue.addEventListener('click', onQueue);
