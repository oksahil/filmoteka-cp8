import axios from 'axios';
import { KEY } from '/src/index';
import { refs } from '/src/index';
import Notiflix from 'notiflix';

export let listg = [];

export async function fetchGenres() {
  
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`)
        
       listg = response.data.genres;
        console.log(listg);
        return listg;
        } catch (error) {
            console.log(error);
            refs.list.innerHTML = '';
            return Notiflix.Notify.failure('Oops, there is no film with that name.');
            };
 };
       
