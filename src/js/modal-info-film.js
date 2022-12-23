import { refs } from '/src/index.js';
import { fetchFilmInfo } from "/src/js/fetch-film-info";
import { cardTemplate } from "/src/js/card-templete";
import { fetchFilmPopularity } from "/src/js/fetch-film-popularity";
import { getLocalSt, setLocalSt, remLocalSt } from './localStorage';
import Notiflix from 'notiflix';
// import { add } from 'lodash';


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

  const makeArr = (id, list) => {
    let newArr = [];
    let localArr = getLocalSt(list);
    if (localArr) {
      newArr = [...localArr];
    }
    const arrSet = new Set(newArr);
    return arrSet.has(id);
  };

  async function textWatchDelay() {
    setTimeout(() => {
      addWatched.textContent = 'Remove from watched';
      addWatched.disabled = false;
    }, 1000);
  }
  async function textQueueDelay() {
    setTimeout(() => {
      addQueue.textContent = 'Remove from queue';
      addQueue.disabled = false;
    }, 1000);
  }
  const onWatchedModalBtn = e => {
    let watchArr = [];
    const watchObj = data;

    if (addWatched.classList.contains('active')) {
      console.log(data.id);
      remLocalSt(WATCHED_KEY);

      let index = watchArr.indexOf(data.id);
      watchArr.splice(index, 1);

      const stringedWatchArr = JSON.stringify(watchArr);
      localStorage.setItem(WATCHED_KEY, stringedWatchArr);
      console.log(stringedWatchArr);
      Notiflix.Notify.failure('Removed from watched');
      addWatched.classList.remove('active');
      addWatched.textContent = 'Add to watched';
      return;
    }
    watchArr.push(watchObj);

    const stringedWatchArr = JSON.stringify(watchArr);
    localStorage.setItem('watched', stringedWatchArr);
    console.log(stringedWatchArr);

    addWatched.textContent = 'Added from watched';
    addWatched.disabled = true;

    textWatchDelay();
    addWatched.classList.add('active');
  };

  const onQueueModalBtn = e => {
    console.log('hello!');
    e.preventDefault();
    let queueArr = [];
    const queueObj = data;

    if (addQueue.classList.contains('active')) {
      console.log(data.id);
      remLocalSt(QUEUE_KEY);

      let index = queueArr.indexOf(data.id);
      queueArr.splice(index, 1);

      const stringedQueueArr = JSON.stringify(queueArr);
      localStorage.setItem(QUEUE_KEY, stringedQueueArr);
      console.log(stringedQueueArr);
      Notiflix.Notify.failure('Removed from queue');
      addQueue.classList.remove('active');
      addQueue.textContent = 'Add to queue';
      return;
    }
    queueArr.push(queueObj);

    const stringedQueueArr = JSON.stringify(queueArr);
    localStorage.setItem('queue', stringedQueueArr);
    console.log(stringedQueueArr);

    addQueue.textContent = 'Added from queue';
    addQueue.disabled = true;

    textQueueDelay();
    addQueue.classList.add('active');
  };

  addWatched.addEventListener('click', onWatchedModalBtn);
  addQueue.addEventListener('click', onQueueModalBtn);

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
 