// import { rendserIds } from '/src/index';

// export const cardTemplate = ({ poster_path, original_title, release_date, genre_ids, first_air_date, vote_average, vote_count, popularity }) => {
//     rendserIds(genre_ids);
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
//         return `<li class="card-item list">
//     <img class="film-img" src="https://pixabay.com/get/gb7db569fc3e8b14cffd882555f170a29f60967eb4b440951996ecf4dacfea8c4e24bfffa9b9a672bc4413d9a61fbeb317cbfc98195588fe198e02464199770bf_640.jpg">
//     </li>
//     <li>
//     <h2 class="film-title">${original_title}</h2>
//     <ul class="info-film">
//     <li>
//     <p class="text-discription">Vote/Votes</p>
//     <p class="text-discription">Popularity</p>
//     <p class="text-discription">Original Title</p>
//     <p class="text-discription">Genre</p>
//     </li>
//     <li>
//     <p class="text-discription">${vote_average}/${vote_count}</p>
//     <p class="text-discription">${popularity}</p>
//     <p class="text-discription">${original_title}</p>
//     <p class="text-discription">${strGenres}</p>
//     </li>
//     </ul>
//     <h3>About</h3>
//     <p>${overview}</p>
//         <ul class="btn-list list">
//             <li class="btn-item"><button class="add-watched-btn btn" type="button"><span class="btn-text">ADD TO WATCHED</span></button></li>
//             <li class="btn-item"><button class="add-queue-btn btn" type="button"><span class="btn-text">ADD TO QUEUE</span></button></li>
//         </ul>
//     </li>`;
//     } else {
//         return `<li class="card-item list">
//     <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
//     </li>
//     <li>
//     <h2 class="film-title">${original_title}</h2>
//     <ul class="info-film">
//     <li>
//     <p class="text-discription">Vote/Votes</p>
//     <p class="text-discription">Popularity</p>
//     <p class="text-discription">Original Title</p>
//     <p class="text-discription">Genre</p>
//     </li>
//     <li>
//     <p class="text-discription">${vote_average}/${vote_count}</p>
//     <p class="text-discription">${popularity}</p>
//     <p class="text-discription">${original_title}</p>
//     <p class="text-discription">${strGenres}</p>
//     </li>
//     </ul>
//     <h3>About</h3>
//     <p>${overview}</p>
//         <ul class="btn-list list">
//             <li class="btn-item"><button class="add-watched-btn btn" type="button"><span class="btn-text">ADD TO WATCHED</span></button></li>
//             <li class="btn-item"><button class="add-queue-btn btn" type="button"><span class="btn-text">ADD TO QUEUE</span></button></li>
//         </ul>
//     </li>`;
//     }
// }