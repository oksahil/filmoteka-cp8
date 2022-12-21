import { getDatabase, ref, set, update, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const auth = getAuth(app);

export default class fireStorage {
  constructor(watched, queue) {
    this._watched = watched;
    this._queue = queue;
  }
  get watched() {
    return this._watched;
  }
  set watched(newWatched) {
    this._watched = newWatched;
    onAuthStateChanged(auth, user => {
      if (user) {
        const dataLib = `users/${user.uid}/libs/watched`;

        update(ref(db, dataLib), thi._watched);
      }
    });
  }
  get queue() {
    return this._queue;
  }
  set queue(newQueue) {
    this._queue = newQueue;
    onAuthStateChanged(auth, user => {
      if (user) {
        const dataLib = `users/${user.uid}/libs/queue`;

        update(ref(db, dataLib), this._queue);
      }
    });
  }
  removeWatched() {
    onAuthStateChanged(auth, user => {
      if (user) {
        const dataLib =
          `users/${user.uid}/libs/watched` + Object.keys(this._watched);

        remove(db, dataLib);
      }
    });
  }
  removeQueue() {
    onAuthStateChanged(auth, user => {
      if (user) {
        const dataLib =
          `users/${user.uid}/libs/watched` + Object.keys(this._queue);

        remove(ref(db, dataLib));
      }
    });
  }
}
