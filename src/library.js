import '/src/sass/index.scss';
import Notiflix from 'notiflix';


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
  libraryList: document.querySelector('.films-list-library'),
};

const addToWatchedList = () => {
  console.log('hello');
  let watchArr = [];
  const watchArrJson = getLocalSt('watched');
  console.log(watchArrJson);
  if (watchArrJson) {
      watchArr = [...watchArrJson];
  }
  let queueArr = [];
  const queueArrJson = getLocalSt('queue');
  if (watchArrJson) {
    queueArr = [...queueArrJson];
  }
  const watchSet = new Set(watchArr);
  if (watchSet.has(id)) {
      console.log("it's watching time")
  } else {
      watchArr.push(id);
      setLocalSt('watched', watchArr);
  }

  const queueSet = new Set(queueArr);
  if (queueSet.has(id)) {
    remLocalSt('queue');

  let index = queueArr.indexOf(id);
  queueArr.splice(index, 1);
      setLocalSt('queue', queueArr);
      }
};
const makeArr = (id, arr) => {
  let blankArr = [];
  let storageArr = getLocalSt(arr);
  if (storageArr) {
    blankArr = [...storageArr];
  }
  const mexis = new Set(blankArr);
  return mexis.has(id);
};

// const onWatchedModalClick = () => {

// }

const onWatched = () => {
  console.log('watched');
};

const onQueue = () => {};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
