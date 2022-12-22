import { refs } from '/src/index.js';
import { fetchFilmInfo } from "/src/js/fetch-film-info";
import { cardTemplate } from "/src/js/card-templete";

console.log(refs);
refs.list.addEventListener('click', onCardClick);
// window.addEventListener()

function onCardClick(e) {
    // console.dir(e.target.closest('.film-item').id);
    const filmTemplateId =e.target.closest('.film-item').id;
    toggleModal();

    fetchFilmInfo(filmTemplateId).then(respFilmInfo);
};

function respFilmInfo(resp) {
    console.log(resp.data);
    console.log(resp.data.popularity);

    refs.cardList.innerHTML = cardTemplate(resp.data);

    window.addEventListener('keydown', onEscCloseModal);
    refs.modal.addEventListener('click', onOutsideClickCloseModal);
};

//   refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
};

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
 