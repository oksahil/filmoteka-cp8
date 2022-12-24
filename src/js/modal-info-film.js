import { refs } from '/src/index.js';
import { fetchFilmInfo } from "/src/js/fetch-film-info";
import { cardTemplate } from "/src/js/card-templete";
import { fetchFilmPopularity } from "/src/js/fetch-film-popularity";
import { getLocalSt, setLocalSt, remLocalSt } from './localStorage';
import Notiflix from 'notiflix';
// import { add } from 'lodash';
// import { add } from 'lodash';


console.log(refs);
refs.list.addEventListener('click', onCardClickOpenModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

// let currentPictSrc = "";
function onCardClickOpenModal(e) {
    console.log(e.target.closest('.film-item'));

    // currentPictSrc = e.target.closest('.film-item img').currentSrc;
    const filmTemplateId =e.target.closest('.film-item').id;
    toggleModal();

    fetchFilmInfo(filmTemplateId).then(respFilmInfo).catch(errorFilmInfo);
};

function respFilmInfo(resp) {
    console.log(resp.data);

    refs.cardList.innerHTML = cardTemplate(resp.data);
    // refs.cardList.innerHTML = cardTemplate(resp.data,currentPictSrc);

  //-------------------------------------WATCHED-QUEUE----------------------------------------

  const WATCHED_KEY = 'watched';
  const QUEUE_KEY = 'queue';
  const { data } = resp;

  const addQueue = document.querySelector('.add-queue-btn');
  const addWatched = document.querySelector('.add-watched-btn');

  let watchArr = [];
  const watchObj = data;
  let queueArr = [];
  const queueObj = data;


  if (!getLocalSt(WATCHED_KEY)) {
    setLocalSt(WATCHED_KEY, watchArr);
  }
  if (!getLocalSt(QUEUE_KEY)) {
    setLocalSt(QUEUE_KEY, queueArr);
  }
  
  if (getLocalSt(WATCHED_KEY).find(obj => obj.id === data.id)) {
    addWatched.textContent = "Remove from watched";
    addWatched.classList.add('active');
  }
   if (getLocalSt(QUEUE_KEY).find(obj => obj.id === data.id)) {
     addQueue.textContent = 'Remove from queue';
     addQueue.classList.add('active');
   }



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
    console.log('hello!');
    e.preventDefault();


    if (getLocalSt(WATCHED_KEY) === undefined) {
      watchArr.push(watchObj);

      const stringedQueueArr = JSON.stringify(watchArr);
      localStorage.setItem(WATCHED_KEY, stringedWatchArr);
      console.log(stringedWatchArr);

      addWatched.textContent = 'Added from watched';
      addWatched.disabled = true;

      textWatchDelay();
      addWatched.classList.add('active');
    } else if (getLocalSt(WATCHED_KEY).find(obj => obj.id === data.id)) {
      console.log(data.id);
      watchArr.push(...getLocalSt(WATCHED_KEY));

      let index = watchArr.indexOf(data.id);
      watchArr.splice(index, 1);

      const stringedWatchArr = JSON.stringify(watchArr);
      localStorage.setItem(WATCHED_KEY, stringedWatchArr);
      console.log(stringedWatchArr);
      Notiflix.Notify.failure('Removed from watched');
      addWatched.classList.remove('active');
      addWatched.textContent = 'Add to watched';
      return;
    } else {
      console.log(watchArr);
      watchArr.push(...getLocalSt(WATCHED_KEY));
      watchArr.push(watchObj);

      const stringedWatchArr = JSON.stringify(watchArr);
      localStorage.setItem(WATCHED_KEY, stringedWatchArr);
      console.log(stringedWatchArr);

      addWatched.textContent = 'Added from watched';
      addWatched.disabled = true;

      textWatchDelay();
      addWatched.classList.add('active');
    }
  };

  const onQueueModalBtn = e => {
    console.log('hello!');
    e.preventDefault();

    if (getLocalSt(QUEUE_KEY) === undefined) {
      queueArr.push(queueObj);

      const stringedQueueArr = JSON.stringify(queueArr);
      localStorage.setItem('queue', stringedQueueArr);
      console.log(stringedQueueArr);

      addQueue.textContent = 'Added from queue';
      addQueue.disabled = true;

      textQueueDelay();
      addQueue.classList.add('active');
    } else if (getLocalSt(QUEUE_KEY).find(obj => obj.id === data.id)) {
      console.log(data.id);
      queueArr.push(...getLocalSt(QUEUE_KEY));

      let index = queueArr.indexOf(data.id);
      queueArr.splice(index, 1);

      const stringedQueueArr = JSON.stringify(queueArr);
      localStorage.setItem(QUEUE_KEY, stringedQueueArr);
      console.log(stringedQueueArr);
      Notiflix.Notify.failure('Removed from queue');
      addQueue.classList.remove('active');
      addQueue.textContent = 'Add to queue';
      return;
    } else {
      queueArr.push(...getLocalSt(QUEUE_KEY));
      queueArr.push(queueObj);

      const stringedQueueArr = JSON.stringify(queueArr);
      localStorage.setItem('queue', stringedQueueArr);
      console.log(stringedQueueArr);

      addQueue.textContent = 'Added from queue';
      addQueue.disabled = true;

      textQueueDelay();
      addQueue.classList.add('active');
    }
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
 