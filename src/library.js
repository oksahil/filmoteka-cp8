import '/src/sass/index.scss';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './js/Firebase/firebase-config';
import fireStorage from './js/Firebase/fireStorage';

import { ApiService } from './js/Firebase/api-service';

const DEBOUNCE_DELAY = 1000;
const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

const app = initializeApp(firebaseConfig);

const refs = {
    input: document.querySelector('.search-input'),
    list: document.querySelector('.film-list'),
    watched: document.querySelector('.watched-btn'),
    queue: document.querySelector('.queue-btn'),
    libraryList: document.querySelector('.films-list-library')
};

const data = {
  watchedInfo: {},
  queueInfo: {},
};
const { watchedInfo, queueInfo } = data;

new fireStorage(watchedInfo, queueInfo);
const filmsApi = new ApiService();

const onWatchedBlankClick = () => {
  // const filmTitle = document.querySelector('.film-title')
  // const modalWatch = document.querySelector('.modal-watch')
  watchedInfo[e.target.dataset.id] = filmTitle.textContent;
  const firebase = new fireStorage(watchedInfo, queueInfo);
  firebase.removeWatched();

  onAuthStateChanged((auth, user) => {
    if (user) {
      const libUserId = `users/${user.uid}/lib/watched/`;

      get(ref(db, libUserId))
        .then(snapshot => {
          if (snapshot.exists()) {
            const dataId = Object.keys(snapshot.val());
          } else {
            libraryList.innerHTML = '';
          }
        })
        .catch(error => {
          console.log(error);
        });
      
    }
    else {
        firebase.watched = {
          [e.target.dataset.id]: filmTitle.textContent,
        }
}
})
}
  


const onWatched = () => {
    onAuthStateChanged((auth, user) => {
        if (user) {
            const libUserId = `users/${user.uid}/lib/watched/`

            get(ref(db, libUserId)).then(snapshot => {
                if (snapshot.exists()) {
                    const dataId = Object.keys(snapshot.val())
                } else {
                    libraryList.innerHTML = '';
                }
            }).catch(error => {
                console.log(error)
            })
        }
    })
};

const onQueue = () => {
  console.log('anotha test');
};

const renderById = async (dataId) => {
    try {
        const dataArr = dataId.map(async id => {
            filmsApi.id = id;
            return await filmsApi.fetchId();
        })
        const films = await Promise.all(dataArr);

    }
    catch {

    }
}

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);
