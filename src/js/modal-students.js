const modalStudent = document.querySelector('.modal-student-js');
const modalStudentOpen = document.querySelector('.student-open-js');
const modalStudentClose = document.querySelector('.student-close-js');
const modalAudio = document.getElementById('audio-shedruk');
const headerEl = document.querySelector('.js-header');
const cnv = document.getElementById('cnv');

modalStudentOpen.addEventListener('click', onClickOpen);
modalStudentClose.addEventListener('click', onClickClose);

function onClickOpen(e) {
    e.preventDefault();
    modalStudent.style.display = 'block';
    if (modalStudent.style.display = 'block') {
        headerEl.style.zIndex = '0';
        playSound();
    }
}

function onClickClose(e) {
    e.preventDefault();
    modalStudent.style.display = 'none';
    if (modalStudent.style.display = 'none') {
        headerEl.style.zIndex = '1000';
        stopSound();
    }
}

window.onclick = function (e) {
    if (e.target == cnv) {
        modalStudent.style.display = 'none';
        headerEl.style.zIndex = '1000';
        stopSound();
    }
}

function playSound() {
    modalAudio.currentTime = 0;
    modalAudio.play();
  }

function stopSound() {
    modalAudio.pause();
}