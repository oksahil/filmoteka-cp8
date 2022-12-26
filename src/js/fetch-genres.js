import axios from 'axios';
import { KEY } from '/src/index';
import { refs } from '/src/index';
import Notiflix from 'notiflix';
import { getLocalSt, setLocalSt } from './localStorage';

export let listg = [];
const GENRE_DATA = 'genres';

export async function fetchGenres() {
  
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`)
        
       listData = response.data.genres;
        console.log(listg);
        localStorage.setItem(GENRE_DATA, JSON.stringify(listData));
        listg = getLocalSt(GENRE_DATA);
        console.log(listData);
        return listg;
        } catch (error) {
            console.log(error.message);
            refs.list.innerHTML = '';
            return Notiflix.Notify.failure('Oops, there is no film with that name.');
            };
 };
       
