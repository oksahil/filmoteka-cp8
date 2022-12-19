// import { rendserIds } from '/src/index';


// export const filmTemplate = ({ poster_path, original_title, release_date, genre_ids, first_air_date }) => {
//     rendserIds(genre_ids, listg);
//     if (genre_ids === '') {
//         genre_ids = "no ganeres";
//     }
//     if (release_date === "") {
//         release_date = "no relase date";
//     }
//     if (release_date === undefined) {
//         release_date = first_air_date;
//     }
//     dataFilm = release_date.slice(0, 4);
//     if (poster_path === null) {
//         return `<li class="film-item list">
//     <div class="films">
//     <img class="film-img" src="https://pixabay.com/get/gb7db569fc3e8b14cffd882555f170a29f60967eb4b440951996ecf4dacfea8c4e24bfffa9b9a672bc4413d9a61fbeb317cbfc98195588fe198e02464199770bf_640.jpg">
//     <h2 class="film-title">${original_title}</h2>
//     <h3 class="film-genre">${strGenres} | ${dataFilm}</h3>
//     </div>
//     </li>`;
//     } else {
//         return `<li class="film-item list">
//     <div class="films">
//     <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
//     <h2 class="film-title">${original_title}</h2>
//     <h3 class="film-genre">${strGenres} | ${dataFilm}</h3>
//     </div>
//     </li>`;
//     }
// }