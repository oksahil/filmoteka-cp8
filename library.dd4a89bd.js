!function(){var e=document.querySelector(".modal-student-js"),t=document.querySelector(".student-open-js"),n=document.querySelector(".student-close-js"),l=document.getElementById("audio-shedruk"),d=document.querySelector(".js-header"),c=document.getElementById("cnv");function o(){l.pause()}t.addEventListener("click",(function(t){t.preventDefault(),e.style.display="block",e.style.display="block",d.style.zIndex="0",l.currentTime=0,l.play()})),n.addEventListener("click",(function(t){t.preventDefault(),e.style.display="none",e.style.display="none",d.style.zIndex="1000",o()})),window.onclick=function(t){t.target==c&&(e.style.display="none",d.style.zIndex="1000",o())}}();
//# sourceMappingURL=library.dd4a89bd.js.map