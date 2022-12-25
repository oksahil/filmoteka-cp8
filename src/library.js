import '/src/sass/index.scss';
import Notiflix from 'notiflix';
import { filmTemplate } from './js/film-templete-lib';
// import imgTemplate from '/src/images/BOX.jpg';


var debounce = require('lodash.debounce');
import { setLocalSt, getLocalSt, remLocalSt } from './js/localStorage';
import axios from 'axios';
import { fetchGenres } from './js/fetch-genres';

const DEBOUNCE_DELAY = 300;
const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';


const ID_URL = `https://api.themoviedb.org/3/search/movie/`;

const refs = {
  input: document.querySelector('.search-input'),
  list: document.querySelector('.film-list'),
  watched: document.querySelector('.watched-btn'),
  queue: document.querySelector('.queue-btn'),
  filmList: document.querySelector('.film-list'),
};

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

// const createMovieById = async (id) => {
//   try {
//     const { data } = await axios.get(`${ID_URL}${id}?api_key=${KEY}`);

//     const dataObj = {
//       ...data,
//       year: createYear(data),
//       genre: onGenre(data),
//     };
//     return dataObj;
//   } catch {
//     console.log('Error', error);
//   }
// }

// const createYear = (obj) => {
//   return obj.release_date ? obj.release_date.split('-')[0] : '';
// }
// const onGenre = (arr) => {
//   return arr.genres.map(genre => genre.name).slice(0, 3).flat();
// }

const onWatched = () => {

  const watchFilm = [...getLocalSt(WATCHED_KEY)]



  const markup = watchFilm.map(obj => filmTemplate(obj)).join('');

  refs.filmList.insertAdjacentHTML('beforeend', markup);


  console.log(markup);

  
};

const onQueue = () => {
  const queueFilm = [...getLocalSt(QUEUE_KEY)];
  
  const markup = queueFilm.map(obj => {
    const listg = obj.genres;
    filmTemplate(obj)

  });

  refs.filmList.insertAdjacentHTML('beforeend', markup);

  console.log(markup);
};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);