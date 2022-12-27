const bodyRefs = document.querySelector('body');
const blackFooter = document.querySelector('footer');
const librarySwitch = document.querySelector('.change-color__wrap');

// bodyRefs.classList.add("light-color-theme");
// blackFooter.classList.add("light-color-theme");

librarySwitch.addEventListener('click', onChangeColor);

const savedColor = localStorage.getItem("theme");

function onChangeColor (event) {
 
 if(bodyRefs.classList.contains('light-theme') && blackFooter.classList.contains("light-theme")) {
   bodyRefs.classList.remove('light-theme');
   blackFooter.classList.remove('light-theme');
   bodyRefs.classList.add('dark-theme');
   blackFooter.classList.add('dark-theme');
 } else {
  bodyRefs.classList.remove('dark-theme');
  blackFooter.classList.remove('dark-theme');
  bodyRefs.classList.add('light-theme');
  blackFooter.classList.add('light-theme');
  };
   
  localStorage.setItem('theme', bodyRefs.classList);
};

checkingColor();

function checkingColor() {
   if(savedColor) {
   bodyRefs.classList = savedColor;
   blackFooter.classList = savedColor;
   } else if(savedColor = 'dark-theme') {
   blackFooter.classList.add('dark-theme');
   bodyRefs.classList.add('dark-theme');
  } else if ( savedColor === "light-theme") {
    blackFooter.classList.add('light-theme');
   bodyRefs.classList.add('light-theme');
  };
};