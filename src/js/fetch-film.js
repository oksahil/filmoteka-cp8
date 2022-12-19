import axios from 'axios';
import { KEY } from '/src/index';
import { URL } from '/src/index';
import { fetchGenres } from '/src/js/fetch-genres';
import { refs } from '/src/index';
import Notiflix from 'notiflix';
import { render } from '/src/index';



export async function fetchFilm(e) {
     e.preventDefault();
    fetchGenres();
    const value = e.target.value;
    try { const response = await axios.get(`${URL}${KEY}&query=${value}`)
      let items = response.data.results;
        return render(items);
        } catch (error) {
            console.log(error);
            refs.list.innerHTML = '';
            return Notiflix.Notify.failure('Oops, there is no film with that name.');
            };
 };
