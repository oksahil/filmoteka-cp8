import axios from 'axios';
import { KEY } from '/src/index';
import { URL } from '/src/index';
import { fetchGenres } from '/src/js/fetch-genres';
import { refs } from '/src/index';
import Notiflix from 'notiflix';
import { render } from '/src/index';
import { fetchFilmPopularity } from '/src/js/fetch-film-popularity';


export async function fetchFilm(name = 0, pageNumber = 1) {
  fetchGenres();

    refs.error.textContent = '';
    try {
      const response = await axios.get(
        `${URL}${KEY}&page=${pageNumber}&query=${name}`
      );
      let items = response.data.results;
      console.log(items);
      if (items.length === 0) {
        fetchFilmPopularity();
        refs.error.textContent = 'Search result not successful. Enter the correct movie name.';
      }
      render(items);
      return response.data;
    } catch (error) {
      console.log(error.message);
      fetchFilmPopularity();
      refs.error.textContent = 'Search result not successful. Enter the correct movie name.';
      refs.list.innerHTML = '';
      // return Notiflix.Notify.failure('Search result not successful. Enter the correct movie name.');
      return;
    }
  }

// export async function fetchFilm(name = 0, pageNumber = 1) {
//   fetchGenres();

//     refs.error.textContent = '';
//     try {
//       const response = await axios.get(`${URL}${KEY}&page=${pageNumber}&query=${name}`);
//       console.log(value);
//       console.log(response);
//       let items = response.data.results;
//       console.log(items);
//       if (items.length === 0) {
//         fetchFilmPopularity();
//         refs.error.textContent = 'Search result not successful. Enter the correct movie name.';
//       }
//       render(items);
//       return response.data;
//     } catch (error) {
//       console.log(error.message);
//       fetchFilmPopularity();
//       refs.error.textContent = 'Search result not successful. Enter the correct movie name.';
//       refs.list.innerHTML = '';
//       return; 
//     }
//   }