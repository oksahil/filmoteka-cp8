import { refs } from '/src/index.js';
import { fetchFilmInfo } from "/src/js/fetch-film-info";
import { cardTemplate } from "/src/js/card-templete";
import { fetchFilmPopularity } from "/src/js/fetch-film-popularity";
import { getLocalSt, setLocalSt, remLocalSt } from './localStorage';
import Notiflix from 'notiflix';


console.log(refs);
refs.list.addEventListener('click', onCardClickOpenModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

let currentPictSrc = "";
function onCardClickOpenModal(e) {
    console.dir(e.target.closest('.film-item img').currentSrc);
    // console.log(e.target.closest('.film-item'));

    

    currentPictSrc = e.target.closest('.film-item img').currentSrc;
    console.log(currentPictSrc);
    const filmTemplateId =e.target.closest('.film-item').id;
    toggleModal();

    fetchFilmInfo(filmTemplateId).then(respFilmInfo).catch(errorFilmInfo);
};

function respFilmInfo({ data }) {
  console.log(data);
  console.log(data.id);
  // console.log(resp.data.popularity);

  refs.cardList.innerHTML = cardTemplate(data, currentPictSrc);

  //-------------------------------------WATCHED-QUEUE----------------------------------------

  const WATCHED_KEY = 'watched';
  const QUEUE_KEY = 'queue';

  const addQueue = document.querySelector('.add-queue-btn');
  const addWatched = document.querySelector('.add-watched-btn');

  const onWatchedModalBtn = () => {
    let watchArr = [];
    const cardObj = data;

    if (getLocalSt(WATCHED_KEY)) {
      watchArr.splice(data.id, 1);
      setLocalSt(WATCHED_KEY, watchArr);
      Notiflix.Notify.failure('Removed from watched');
      return;
    }
    watchArr.push(cardObj);
    console.log(cardObj.id);
    const stringedWatchArr = JSON.stringify(watchArr);
    localStorage.setItem('watched', stringedWatchArr);
    console.log(stringedWatchArr);
    addWatched.textContent = 'Added to watched';
  };

  addWatched.addEventListener('click', onWatchedModalBtn);

  //------------------------------------WATCHED-QUEUE---------------------------

  window.addEventListener('keydown', onEscCloseModal);
  refs.modal.addEventListener('click', onOutsideClickCloseModal);
};
function errorFilmInfo(er) {
    console.log(er);
    // fetchFilmPopularity();
    // refs.cardList.innerHTML = "Sorry we can't load film data!";
    window.addEventListener('keydown', onEscCloseModal);
    refs.modal.addEventListener('click', onOutsideClickCloseModal);
};

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
};



// ----------------- CLOSE MODAL------------------------------
function onEscCloseModal(e) {
    if (e.code !== 'Escape') {
        return;
    }

    toggleModal();
    removeAddEventlisteners();
};
function onOutsideClickCloseModal(e) {
    // console.log(e.currentTarget);
    // console.log(e.target);
    if (e.currentTarget !== e.target) return;
    toggleModal();
    removeAddEventlisteners();
};
function removeAddEventlisteners() {
    window.removeEventListener('keydown', onEscCloseModal);
    refs.modal.removeEventListener('click', onOutsideClickCloseModal);
};
 