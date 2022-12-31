import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, create, onAuthStateChanged, signOut } from 'firebase/auth'
import { getDatabase } from 'firebase/database';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyCz_YtWWFr6BlJzAIK8ECzxN1DRF2942JQ',
  authDomain: 'filmoteka-ffbb3.firebaseapp.com',
  projectId: 'filmoteka-ffbb3',
  storageBucket: 'filmoteka-ffbb3.appspot.com',
  messagingSenderId: '643602411643',
  appId: '1:643602411643:web:47d36a7b4f043e656e72de',
  measurementId: 'G-SH62D3GLYX',
};

//-------------------Modal
const backdrop = document.querySelector('.backdrop');
const modalinButton = document.querySelector('.button-modalin');
const modalupButton = document.querySelector('.button-modalup');
const labelEmail = document.querySelector('.label-email');
const btnClose = document.querySelector('.backdrop__close');
const signupBtn = document.querySelector('.signup-button');
const signinBtn = document.querySelector('.signin-button');
const library = document.querySelector('.navigation-item-second.js-library')
const profile = document.querySelector('.profile');
const logout = document.querySelector('.navigation-item-second.logout');
//------------------------

//----------------------------------------Firebase-------------------
// const user = document.querySelector('.auth-form__username').value;
const email = document.querySelector('.auth-form__email').value;
const password = document.querySelector('.auth-form__password').value;


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);


const onSignUp = (e) => {
    e.preventDefault();
    console.log('firebase')
    const email = document.querySelector('.auth-form__email').value;
    const password = document.querySelector('.auth-form__password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
          const user = userCredential.user;
        Notiflix.Notify.success(`Welcome`);
      library.style.display = 'block';
      profile.style.display = 'block';
      logout.style.display = 'block';
      })
        .catch(error => {
            console.log(error.message);
            Notiflix.Notify.failure('Unabled to enter');
        });
}
const onSignIn = (e) => {
    e.preventDefault();
    console.log('firebase');
    const email = document.querySelector('.auth-form__email').value;
    const password = document.querySelector('.auth-form__password').value;

    signInWithEmailAndPassword(auth, email, password).then(userCred => {
        const user = userCred.user;
      Notiflix.Notify.success('Long time no see!')
      library.style.display = 'block';
      profile.style.display = 'block';
      logout.style.display = 'block';
    })
}
const onLogout = () => {
  signOut(auth).then(() => {
    library.style.display = 'none';
    profile.style.display = 'none';
  }).catch(console.log);
}

  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      modalupButton.style.display = "none";
      modalinButton.style.display = 'none';
      logout.style.display = "block";
    } else {
      library.style.display = "none";
      logout.style.display = "none";
      profile.style.display = "none";
    }
  });
//--------------------------------------------end of authentication


//---------------------Modal handling---------------

const onOpenModalSignUp = () => {
  backdrop.classList.remove('das-hidden');
  signinBtn.style.display = 'none';
  signupBtn.style.display = 'block';

};
const onOpenModalSignIn = () => {
  backdrop.classList.remove('das-hidden');
  signinBtn.style.display = 'block';
  signupBtn.style.display = 'none';
};

const onCloseModal = () => {
  backdrop.classList.add('das-hidden');
};

modalinButton.addEventListener('click', onOpenModalSignIn);
modalupButton.addEventListener('click', onOpenModalSignUp);
btnClose.addEventListener('click', onCloseModal);
signupBtn.addEventListener('click', onSignUp);
signinBtn.addEventListener('click', onSignIn);
logout.addEventListener('click', onLogout);