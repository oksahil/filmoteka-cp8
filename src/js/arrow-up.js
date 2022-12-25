
const toTheTopBtnRef = document.querySelector('.to-top');
const galleryRef = document.querySelector('.film-list');
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const body = document.querySelector('body');
const controlSwitch = document.querySelector('.switch__wrap');
const modalStudentOpen = document.querySelector('.student-open-js');
const modalStudentClose = document.querySelector('.student-close-js');

// створили змінну для координат галереї
let rect = {};


// функція при кліці на кнопку ВВЕРХ - прокручує вверх, ховає кнопку
function onClickArrow() {
  toTheTopBtnRef.classList.add('hidden');
  window.scrollTo({
    top: 380,
    behavior: 'smooth',
  });

};


// функція - показуємо кнопку прокрутити вверх
function showBtnToTheTop() {
  toTheTopBtnRef.classList.remove('hidden');
};

// функція - ховаємо кнопку прокрутити вверх
function hiddenBtnToTheTop() {
  toTheTopBtnRef.classList.add('hidden');
}

// функція для перевірки позиції галереї
function galleryPosition() {
  rect = galleryRef.getBoundingClientRect();
  // console.log(rect);
}

// перевірка на колір теми
if (body.classList.contains('dark-theme')) {
    toTheTopBtnRef.classList.add('dark-mood');
   } else if (body.classList.contains('light-theme')) {
    toTheTopBtnRef.classList.remove('dark-mood');
};
  

toTheTopBtnRef.addEventListener('click', onClickArrow);



// функція що робимо при прокручеванні сторінки
// перевіряємо наскільки видна галерея
// якщо не бачимо двох верхніх рядків, то показуємо кнопку ВГОРУ
function onScrollWindow() {
  hiddenBtnToTheTop();

  galleryPosition();
  // console.log(rect.top);
  if (rect.top <= - 1020) {
    showBtnToTheTop();
  };
}


window.addEventListener('scroll', onScrollWindow);


// змінюємо тему
controlSwitch.addEventListener('click', onChangeColor);
function onChangeColor(event) {
  if (body.classList.contains('dark-theme')) {
    toTheTopBtnRef.classList.add('dark-mood');
   } else if (body.classList.contains('light-theme')) {
    toTheTopBtnRef.classList.remove('dark-mood');
  };
};

modalStudentOpen.addEventListener('click', hiddenBtnToTheTop);
modalStudentClose.addEventListener('click', showBtnToTheTop);
