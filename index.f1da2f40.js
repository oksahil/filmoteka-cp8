const e=document.querySelector(".to-top"),t=document.querySelector(".film-list"),n=(window.innerWidth||document.documentElement.clientWidth,window.innerHeight||document.documentElement.clientHeight,document.querySelector("body")),o=document.querySelector(".switch__wrap");let d={};e.addEventListener("click",(function(){e.classList.add("hidden"),window.scrollTo({top:380,behavior:"smooth"})})),window.addEventListener("scroll",(function(){e.classList.add("hidden"),d=t.getBoundingClientRect(),d.top<=-1020&&e.classList.remove("hidden")})),o.addEventListener("click",(function(t){n.classList.contains("dark-theme")?e.classList.add("dark-mood"):n.classList.contains("light-theme")&&e.classList.remove("dark-mood")}));
//# sourceMappingURL=index.f1da2f40.js.map
