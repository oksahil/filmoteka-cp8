import '/src/sass/index.scss';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './js/Firebase/firebase-config';
import fireStorage from './js/Firebase/fireStorage';
// import { ApiService } from './js/Firebase/api-service';

const DEBOUNCE_DELAY = 300;
const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

const app = initializeApp(firebaseConfig);

const refs = {
  input: document.querySelector('.search-input'),
  list: document.querySelector('.film-list'),
  watched: document.querySelector('.watched-btn'),
  queue: document.querySelector('.queue-btn'),
};

const data = {
  watchedInfo: {},
  queueInfo: {},
};
const { watchedInfo, queueInfo } = data;

new fireStorage(watchedInfo, queueInfo);

const onWatched = () => {
  console.log('this is test');
};

const onQueue = () => {
  console.log('anotha test');
};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
