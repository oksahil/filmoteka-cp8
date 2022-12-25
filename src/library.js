import '/src/sass/index.scss';
import Notiflix from 'notiflix';
import { filmTemplate, render, items, strGenres } from '.';
import imgTemplate from '/src/images/BOX.jpg';


var debounce = require('lodash.debounce');
import { setLocalSt, getLocalSt, remLocalSt } from './js/localStorage';
import { cardTemplate } from './js/card-templete';
import axios from 'axios';

const DEBOUNCE_DELAY = 300;
const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';


const ID_URL = `${BASE_URL}/movie/`;

const refs = {
  input: document.querySelector('.search-input'),
  list: document.querySelector('.film-list'),
  watched: document.querySelector('.watched-btn'),
  queue: document.querySelector('.queue-btn'),
  libList: document.querySelector('.film-list-library'),
};

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
const renderLibrary = (data) => {
  const markup = libraryTpl(data);

  return refs.libList.insertAdjacentHTML('beforeend', markup);
}

const createMovieById = async (id) => {
  try {
    const { data } = await axios.get(`${ID_URL}${id}?api_key=${KEY}`);

    const dataObj = {
      ...data,
      year: createYear(data),
      genre: onGenre(data),
    };
    return dataObj;
  } catch {
    console.log('Error', error);
  }
}

const createYear = (obj) => {
  return obj.release_date ? obj.release_date.split('-')[0] : '';
}
const onGenre = (arr) => {
  return arr.genres.map(genre => genre.name).slice(0, 3).flat();
}

const onWatched = () => {
  const watchFilmId = [...getLocalSt(WATCHED_KEY)]

  for (const id of watchFilmId) {
    createMovieById(id).then(data => {
      renderLibrary(data);
    })
  }


  console.log(watchFilmId);

  
};

const onQueue = () => {
  const queueFilmId = [...getLocalSt(WATCHED_KEY)];
  
  console.log(queueFilmId);
};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);