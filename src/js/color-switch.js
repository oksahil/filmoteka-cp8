import { refs } from '/src/index';

const body = document.querySelector('body');
const darkFooter = document.querySelector('footer');
const inputSwitch = document.querySelector('.switch__input');

inputSwitch.addEventListener('change', onChangeTheme);

const savedData = localStorage.getItem("theme");

function onChangeTheme (event) {

   if(body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    darkFooter.classList.remove('dark-theme');
    body.classList.add('light-theme');
    darkFooter.classList.add('light-theme');
   } else {
    body.classList.remove('light-theme');
    darkFooter.classList.remove('light-theme');
    body.classList.add('dark-theme');
    darkFooter.classList.add('dark-theme');
   };

   localStorage.setItem('theme', body.classList);
};

const Theme = {
 LIGHT: 'light-theme',
 DARK: 'dark-theme',
};

checkingData();

function checkingData() {
  if(savedData) {
    body.classList = savedData
  } else if(savedData = 'dark-theme') {
    darkFooter.classList.add('dark-theme');
    inputSwitch.setAttribute('checked', true);
  };
};