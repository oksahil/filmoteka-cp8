!function(){var e=document.querySelector("body"),t=document.querySelector("footer"),s=document.querySelector(".switch__input");s.addEventListener("change",(function(s){e.classList.contains("light-theme")?(e.classList.remove("light-theme"),t.classList.remove("light-theme"),e.classList.add("dark-theme"),t.classList.add("dark-theme")):(e.classList.remove("dark-theme"),t.classList.remove("dark-theme"),e.classList.add("light-theme"),t.classList.add("light-theme"));localStorage.setItem("theme",e.classList)}));var a=localStorage.getItem("theme");a?e.classList=a:(a="dark-theme",t.classList.add("dark-theme"),s.setAttribute("checked",!0))}();
//# sourceMappingURL=index.bf182f9d.js.map
