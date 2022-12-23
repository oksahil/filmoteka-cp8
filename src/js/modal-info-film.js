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

    // const textModalBtn = async (id) => {
    //     console.log('im here')
    //     if (makeArr(data.id, WATCHED_KEY)) {
    //         addWatched.textContent = "Added to watched";
    //         addWatched.disabled = true;

    //         function changeWatchText() {
    //             addWatched.disabled = false;
    //             addWatched.textContent = "Remove from watched";
    //             addWatched.classList.add('active');
    //         }
    //         setTimeout(changeWatchText, 1000);

    //     } else {
    //         addWatched.textContent = "Add to watched";
    //         addWatched.disabled = false;
    //         addWatched.classList.remove('active');
    //     }
    //     if (makeArr(data.id, QUEUE_KEY)) {
    //       addQueue.textContent = 'Added to queue';
    //       addQueue.disabled = true;

    //       function changeQueueText() {
    //         addQueue.disabled = false;
    //         addQueue.textContent = 'Remove from queue';
    //         addQueue.classList.add('active');
    //       }
    //       setTimeout(changeQueueText, 1000);
    //     } else {
    //       addQueue.textContent = 'Add to queue';
    //       addQueue.disabled = false;
    //       addQueue.classList.remove('active');
    //     }
    // }
    
    const makeArr = (id, list) => {
        let newArr = [];
        let localArr = getLocalSt(list);
        if (localArr) {
            newArr = [...localArr];
        }
        const arrSet = new Set(newArr);
        return arrSet.has(id);
    }

    const onWatchedModalBtn = (e) => {
        e.preventDefault();
        let watchArr = [];
        const cardObj = data;

      if (addWatched.classList.contains('active')) {
          console.log(data.id);
          remLocalSt(WATCHED_KEY);

          let index = watchArr.indexOf(data.id);
          watchArr.splice(index, 1);

          setLocalSt(WATCHED_KEY, watchArr);
          Notiflix.Notify.failure('Removed from watched');
          addWatched.classList.remove('active');
          return;
    }
    watchArr.push(cardObj);
    const stringedWatchArr = JSON.stringify(watchArr);
    localStorage.setItem('watched', stringedWatchArr);
      console.log(stringedWatchArr);
      addWatched.textContent = "Remove from watched";
      addWatched.classList.add('active');
  };

  addWatched.addEventListener('click', onWatchedModalBtn);
    
    // const WATCHED_KEY = 'watch';
    // const QUEUE_KEY = 'queue';

    // let watchedMovieArr = [...JSON.parse(localStorage.getItem(WATCHED_KEY))];
    // let queueMovieArr = [...JSON.parse(localStorage.getItem(QUEUE_KEY))];

    // refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
    // refs.queueBtn.addEventListener('click', onQueueBtnClick);

    // const onWatchedBtnClick = e => {
    //   e.preventDefault();
    //   if (localStorage.getItem(WATCHED_KEY) !== null) {
    //     Notify.failure('You have watched this movie');
    //     return;
    //   }
    //   watchedMovieArr.push(movie);
    //   localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedMovieArr));
    //   Notify.success('You have added this movie to watched');
    // };
    // const onQueueBtnClick = e => {
    //   e.preventDefault();
    //   if (localStorage.getItem(QUEUE_KEY) !== null) {
    //     Notify.failure('You have added this movie to queue');
    //     return;
    //   }
    //   queueMovieArr.push(movie);
    //   localStorage.setItem(QUEUE_KEY, JSON.stringify(queueMovieArr));
    //   Notify.success('You have added this movie to queue');
    // };


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
 