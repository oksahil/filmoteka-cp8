import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { Notify } from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyBPXP1YlZBJsT7lpMpPzltgNCRbOoRLm9E',
  authDomain: 'filmoteka-ab559.firebaseapp.com',
  projectId: 'filmoteka-ab559',
  storageBucket: 'filmoteka-ab559.appspot.com',
  messagingSenderId: '734966919204',
  appId: '1:734966919204:web:6326cd2f16a81192eae8b1',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const btnAuth = document.querySelector('.js-btn-auth');
const btnLibrary = document.querySelector('.js-library');
console.log(btnAuth);
console.log(btnLibrary);

// function checkLogSatus() {
//   btnLibrary.style.display = 'none';
//   btnAuth.textContent = 'Log in';

//   onAuthStateChanged(auth, user => {
//     if (user) {
//       btnLibrary.style.display = 'block';
//       btnAuth.setAttribute('actions', 'logged');
//       btnAuth.textContent = 'Log out';
//     } else {
//       btnAuth.setAttribute('actions', 'out');
//     }
//   });
//   btnAuth.addEventListener('click', authHandler);
// }

function authHandler(e) {
  if (e.currentTarget.getAttribute('actions') === 'logged') {
    signOut(auth);
    btnAuth.setAttribute('actions', 'out');
    btnAuth.textContent = 'Log in';
    btnLibrary.style.display = 'none';
  } else {
    try {
      signInWithPopup(auth, provider).then(res =>
        Notify.success(`Hi, ${res.user.displayName}`)
      );
    } catch (error) {
      console.log(error);
    }
  }
}
checkLogSatus();
