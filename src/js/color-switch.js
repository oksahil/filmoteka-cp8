const body = document.querySelector('body');
const darkFooter = document.querySelector('footer');
const controlSwitch = document.querySelector('.switch__wrap');

controlSwitch.addEventListener('click', onChangeTheme);

const savedData = localStorage.getItem("theme");

function onChangeTheme (event) {

   if(body.classList.contains('light-theme') && darkFooter.classList.contains("light-theme")) {
    body.classList.remove('light-theme');
    darkFooter.classList.remove('light-theme');
    body.classList.remove('light-color-theme');
    darkFooter.classList.remove('light-color-theme');
    body.classList.add('dark-theme');
    darkFooter.classList.add('dark-theme');
   } else {
    body.classList.remove('dark-theme');
    darkFooter.classList.remove('dark-theme');
    body.classList.remove('dark-color-theme');
    darkFooter.classList.remove('dark-color-theme');
    body.classList.add('light-theme');
    darkFooter.classList.add('light-theme');
   };

   localStorage.setItem('theme', body.classList);
};

checkingData();

function checkingData() {
  if(savedData) {
    body.classList = savedData;
    darkFooter.classList = savedData;
  } else if(savedData = 'dark-theme') {
    darkFooter.classList.add('dark-theme');
    body.classList.add('dark-theme');
  }else if(savedData = 'light-theme') {
    darkFooter.classList.add('light-theme');
    body.classList.add('light-theme');
  };
};