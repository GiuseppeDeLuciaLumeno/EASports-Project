//header show and hide after scroll

/* let darkHeader = document.querySelector(".black-block");
let lightHeader = document.querySelector(".lower-header"); */

let header = document.querySelector("header");


let lastScrollTop = 0;

window.addEventListener("scroll", () =>{
  let st = window.scrollY || document.documentElement.scrollTop;
   if (st > lastScrollTop){
    console.log("VADO GIU");
    header.classList.add("header-hider");

    } else {
      console.log("VADO SU");
      header.classList.remove("header-hider");
   }

   lastScrollTop = st <= 0 ? 0 : st;
}, false);

