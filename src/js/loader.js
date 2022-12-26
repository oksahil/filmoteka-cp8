// const searchForm = document.querySelector('.search-input');
// console.log(searchForm);
// searchForm.addEventListener('input', loader);

loader();

function loader() {
    const listGallery = document.querySelector('.list-gallery-js');
    listGallery.style.zIndex = '-1';
    listGallery.style.position = 'sticky'; 
    
    setTimeout(() => {
        const preloader = document.querySelector('#conteiner-loader-js');
        const cube = document.querySelector('.sk-cube-grid ');
        cube.classList.add('preloader_hidden');
        cube.remove();
        preloader.classList.remove('preloader');
        listGallery.style.zIndex = '1';
    }, 1300)
}