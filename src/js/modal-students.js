const modalStudent = document.querySelector('.modal-student-js');
const modalStudentOpen = document.querySelector('.student-open-js');
const modalStudentClose = document.querySelector('.student-close-js');

console.log(modalStudentOpen);

modalStudentOpen.addEventListener('click', onClickOpen);
modalStudentClose.addEventListener('click', onClickClose);

function onClickOpen(e) {
    e.preventDefault();
    modalStudent.style.display = 'block';
}

function onClickClose(e) {
    e.preventDefault();
    modalStudent.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == modalStudent) {
        modalStudent.style.display = 'none';
    }
}