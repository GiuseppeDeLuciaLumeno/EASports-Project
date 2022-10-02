//header show and hide after scroll

let darkHeader = document.querySelector(".black-block");
let lightHeader = document.querySelector(".lower-header");

let lastScrollTop = 0;

window.addEventListener("scroll", () =>{
  let st = window.scrollY || document.documentElement.scrollTop;
   if (st > lastScrollTop){
    console.log("VADO GIU");
    darkHeader.classList.add("black-block-hide");
    lightHeader.classList.add("lower-header-show");

    } else {
      console.log("VADO SU");
      darkHeader.classList.remove("black-block-hide");
      lightHeader.classList.remove("lower-header-show");
   }

   lastScrollTop = st <= 0 ? 0 : st;
}, false);

