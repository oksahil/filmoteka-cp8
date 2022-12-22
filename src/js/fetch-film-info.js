import axios from 'axios';
import { KEY } from '/src/index';
import { URL } from '/src/index';
import { fetchGenres } from '/src/js/fetch-genres';
// import { fetchFilmPopularity } from '/src/js/fetch-film-popularity';
import { refs } from '/src/index';
import Notiflix from 'notiflix';
import { renderInfo } from '/src/index';


export async function fetchFilmInfo(id) {
    // fetchFilmPopularity().then(resp=>console.log("IT'S ME RESP!:",resp));
  // fetchGenres();
  try {
    return await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`);

  // const response = await axios.get(`${URL}${KEY}&query=${value}`)
  //      let itemsInfo = response.data.results;
  //       return renderInfo(itemsInfo);
        } catch (error) {
            // console.log(error);
            refs.list.innerHTML = '';
            return Notiflix.Notify.failure('Oops, there is no film with that name.');
            };
 };
