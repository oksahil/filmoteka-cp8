import { refs } from '/src/index.js';
import { fetchFilmInfo } from "/src/js/fetch-film-info";
import { cardTemplate } from "/src/js/card-templete";

console.log(refs);
refs.list.addEventListener('click', onCardClick);

function onCardClick(e) {
    console.dir(e.target.closest('.film-item').id);
    const filmTemplateId =e.target.closest('.film-item').id;
    toggleModal();

    fetchFilmInfo(filmTemplateId).then(respFilmInfo);
};

function respFilmInfo(resp) {
    console.log(resp.data);
    console.log(resp.data.popularity);

    refs.cardList.innerHTML = cardTemplate(resp.data);
};

//   refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
};
 