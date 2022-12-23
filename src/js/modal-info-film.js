import { refs } from '/src/index.js';
import { fetchFilmInfo } from "/src/js/fetch-film-info";
import { cardTemplate } from "/src/js/card-templete";
import { fetchFilmPopularity } from "/src/js/fetch-film-popularity";


console.log(refs);
refs.list.addEventListener('click', onCardClickOpenModal);
refs.closeModalBtn.addEventListener('click', toggleModal);


function onCardClickOpenModal(e) {
    // console.log(e.target.closest('.film-item'));
    console.log(e);
    const filmTemplateId =e.target.closest('.film-item').id;
    toggleModal();

    fetchFilmInfo(filmTemplateId).then(respFilmInfo).catch(errorFilmInfo);
};

function respFilmInfo(resp) {
    console.log(resp);
    // console.log(resp.data.popularity);

    refs.cardList.innerHTML = cardTemplate(resp.data);

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

const addToWatchedList = () => {
  console.log('hello');
  // let watchArr = [];
  // const watchArrJson = getLocalSt('watched');
  // console.log(watchArrJson);
  // if (watchArrJson) {
  //     watchArr = [...watchArrJson];
  // }
  // let queueArr = [];
  // const queueArrJson = getLocalSt('queue');
  // if (watchArrJson) {
  //   queueArr = [...queueArrJson];
  // }
  // const watchSet = new Set(watchArr);
  // if (watchSet.has(id)) {
  //     console.log("it's watching time")
  // } else {
  //     watchArr.push(id);
  //     setLocalSt('watched', watchArr);
  // }

  // const queueSet = new Set(queueArr);
  // if (queueSet.has(id)) {
  //   remLocalSt('queue');

  // let index = queueArr.indexOf(id);
  // queueArr.splice(index, 1);
  //     setLocalSt('queue', queueArr);
  //     }
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
 