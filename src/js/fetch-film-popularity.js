import axios from 'axios';
import { KEY } from '/src/index';
import { fetchGenres } from '/src/js/fetch-genres';
import { refs } from '/src/index';
import Notiflix from 'notiflix';
import { render } from '/src/index';


export async function fetchFilmPopularity() {
  
    fetchGenres();
    try {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
      let items = response.data.results;
        console.log('popular', items);
        return render(items);
        } catch (error) {
            console.log(error);
            refs.list.innerHTML = '';
            return Notiflix.Notify.failure('Oops, there is no film with that name.');
            };
 };



