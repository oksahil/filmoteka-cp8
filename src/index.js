import '/src/sass/index.scss';
// import Notiflix from 'notiflix';
// import { cardTemplate } from '/src/js/card-templete';
import { fetchFilmPopularity } from '/src/js/fetch-film-popularity';
import { fetchFilmInfo } from '/src/js/fetch-film-info';
import { fetchFilm } from '/src/js/fetch-film';
// import { filmTemplate } from '/src/js/film-templete';
import { listg } from '/src/js/fetch-genres';




var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 1000;
export const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
export const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

export const refs = {
    input: document.querySelector('.search-input'),
    list: document.querySelector('.film-list'),
     // openModalBtn: document.querySelector('.films'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    card: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    cardList: document.querySelector('.card-list'),
    error: document.querySelector('.error'),
}

document.addEventListener('DOMContentLoaded', fetchFilmPopularity());
refs.input.addEventListener('input', debounce(fetchFilm), DEBOUNCE_DELAY);


export let items = [];
export let strGenres = [];

export const filmTemplate = ({ poster_path, original_title, release_date, genre_ids, first_air_date }) => {
    renderIds(genre_ids, listg);
    console.log('strGenres', strGenres);
    if (genre_ids === '') {
        genre_ids = "no ganeres";
    }
    if (release_date === "") {
        release_date = "no relase date";
    }
    if (release_date === undefined) {
        release_date = first_air_date;
    }
    let dataFilm = release_date.slice(0, 4);
    if (poster_path === null) {
        return `<li class="film-item list">
    <div class="films">
    <img class="film-img" src="./src/images/error_img.jpg">
    <h2 class="film-title">${original_title}</h2>
    <h3 class="film-genre">${strGenres} | ${dataFilm}</h3>
    </div>
    </li>`;
    } else {
        return `<li class="film-item list">
    <div class="films">
    <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
    <h2 class="film-title">${original_title}</h2>
    <h3 class="film-genre">${strGenres} | ${dataFilm}</h3>
    </div>
    </li>`;
    }
}

const cardTemplate = ({ poster_path, original_title, release_date, genre_ids, first_air_date, vote_average, vote_count, popularity }) => {
    renderIds(genre_ids, listg);
    if (genre_ids === '') {
        genre_ids = "no ganeres";
    }
    if (release_date === "") {
        release_date = "no relase date";
    }
    if (release_date === undefined) {
        release_date = first_air_date;
    }
    let dataFilm = release_date.slice(0, 4);
    if (poster_path === null) {
        return `<li class="card-item list"  data-modal-open>
    <img class="film-img" src="/src/images/error_img.jpg">
    </li>
    <li>
    <h2 class="film-title">${original_title}</h2>
    <ul class="info-film">
    <li>
    <p class="text-discription">Vote/Votes</p>
    <p class="text-discription">Popularity</p>
    <p class="text-discription">Original Title</p>
    <p class="text-discription">Genre</p>
    </li>
    <li>
    <p class="text-discription">${vote_average}/${vote_count}</p>
    <p class="text-discription">${popularity}</p>
    <p class="text-discription">${original_title}</p>
    <p class="text-discription">${strGenres}</p>
    </li>
    </ul>
    <h3>About</h3>
    <p>${overview}</p>
        <ul class="btn-list list">
            <li class="btn-item"><button class="add-watched-btn btn" type="button"><span class="btn-text">ADD TO WATCHED</span></button></li>
            <li class="btn-item"><button class="add-queue-btn btn" type="button"><span class="btn-text">ADD TO QUEUE</span></button></li>
        </ul>
    </li>`;
    } else {
        return `<li class="card-item list"  data-modal-open>
    <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
    </li>
    <li>
    <h2 class="film-title">${original_title}</h2>
    <ul class="info-film">
    <li>
    <p class="text-discription">Vote/Votes</p>
    <p class="text-discription">Popularity</p>
    <p class="text-discription">Original Title</p>
    <p class="text-discription">Genre</p>
    </li>
    <li>
    <p class="text-discription">${vote_average}/${vote_count}</p>
    <p class="text-discription">${popularity}</p>
    <p class="text-discription">${original_title}</p>
    <p class="text-discription">${strGenres}</p>
    </li>
    </ul>
    <h3>About</h3>
    <p>${overview}</p>
        <ul class="btn-list list">
            <li class="btn-item"><button class="add-watched-btn btn" type="button"><span class="btn-text">ADD TO WATCHED</span></button></li>
            <li class="btn-item"><button class="add-queue-btn btn" type="button"><span class="btn-text">ADD TO QUEUE</span></button></li>
        </ul>
    </li>`;
    }
}

function renderIds(genre_ids, listg) {
    console.log('genre_ids', genre_ids);
    console.log('listg', listg);
    strGenres = [];
    for (const i of genre_ids) { 
        for (const l of listg) {
            if (l.id === i) {
                strGenres.push(l.name);
            }
        }
    }
 
    return strGenres;
}

export function render(items) {
    const filmList = items.map(filmTemplate); 
   
        refs.list.innerHTML = '';
        refs.list.insertAdjacentHTML('beforeend', filmList.join(''));
}

export function renderInfo(itemsInfo) {
        const filmListInfo = itemsInfo.map(cardTemplate);    
        refs.cardList.innerHTML = '';
        refs.cardList.insertAdjacentHTML('beforeend', filmListInfo.join(''));
}
// refs.openModalBtn.addEventListener('click', textInfo);
// function textInfo() {
//     fetchFilmInfo();
// }

