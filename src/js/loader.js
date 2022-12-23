import refs from '../index';

loader();

function loader() {
    const main = document.querySelector('main');

    setTimeout(() => {
        main.classList.add('loaded');
    }, 500);
}

export { loader };