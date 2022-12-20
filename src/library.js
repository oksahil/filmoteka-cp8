import '/src/sass/index.scss';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');


const DEBOUNCE_DELAY = 300;
const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';


const refs = {
    input: document.querySelector('.search-input'),
    list: document.querySelector('.film-list'),
    watched: document.querySelector('.watched-btn'),
    queue: document.querySelector('.queue-btn'),
}


const onWatch = () => {
    console.log("this is test")
};

const onQueue = () => {};

refs.watched.addEventListener('click', onWatch);
refs.queue.addEventListener('click', onQueue);


