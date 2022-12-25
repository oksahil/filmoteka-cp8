import '/src/sass/index.scss';
import Notiflix from 'notiflix';
import { filmTemplate } from './js/film-template-lib';
import { refs, DEBOUNCE_DELAY, URL, KEY } from './index';


import { setLocalSt, getLocalSt, remLocalSt } from './js/localStorage';
var debounce = require('lodash.debounce');


refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
