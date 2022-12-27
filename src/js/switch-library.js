const bodyRefs = document.querySelector('body');
const blackFooter = document.querySelector('footer');
const librarySwitch = document.querySelector('.change-color__wrap');

// bodyRefs.classList.add("light-color-theme");
// blackFooter.classList.add("light-color-theme");

librarySwitch.addEventListener('click', onChangeColor);

const savedColor = localStorage.getItem("theme");

function onChangeColor (event) {
 
 if(bodyRefs.classList.contains('light-color-theme') && blackFooter.classList.contains("light-color-theme")) {
   bodyRefs.classList.remove('light-color-theme');
   blackFooter.classList.remove('light-color-theme');
   bodyRefs.classList.add('dark-color-theme');
   blackFooter.classList.add('dark-color-theme');
 } else {
  bodyRefs.classList.remove('dark-color-theme');
  blackFooter.classList.remove('dark-color-theme');
  bodyRefs.classList.add('light-color-theme');
  blackFooter.classList.add('light-color-theme');
  };
   
  localStorage.setItem('theme', bodyRefs.classList);
};

checkingColor();

function checkingColor() {
   if(savedColor) {
   bodyRefs.classList = savedColor;
   blackFooter.classList = savedColor;
   } else if(savedColor = 'dark-color-theme') {
   blackFooter.classList.add('dark-color-theme');
   bodyRefs.classList.add('dark-color-theme');
  } else if ( savedColor === "light-color-theme") {
    blackFooter.classList.add('light-color-theme');
   bodyRefs.classList.add('light-color-theme');
  };
};