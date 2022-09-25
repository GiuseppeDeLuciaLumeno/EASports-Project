const modal = document.querySelector(".modal-wrapper");
const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");
const esc = document.querySelector(".icon-x");
const blackBackground = document.querySelector(".lower-header");
const body = document.querySelector(".click-out")


//Aside menu activate with dots
asideShow.addEventListener("click", () => {
    asideShow.classList.toggle("active");
    blackBackground.classList.toggle("active");
   /*  modal.showModal() */;
});

//Aside menu Disactivate with I-icon
asidehide.addEventListener("click", () => {
   asideShow.classList.remove("active");
   blackBackground.classList.remove("active");
 /*   modal.close(); */
});

//Aside menu Disactivate width Esc key
window.addEventListener("keydown", keypress);
  function keypress(key) {
    if (key.keyCode == 27) {
        asideShow.classList.remove("active");
        blackBackground.classList.remove("active");
    }
  }

//Aside menu Disactivate by clicking anywhere else
window.addEventListener("mouseup", function (event) {
  if (event.target == body) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
  }

  else if (event.target == blackBackground) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
  }
});


//Aside menu activate with burger menu
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    blackBackground.classList.toggle("active");
});

asidehide.addEventListener("click", () => {
    burger.classList.remove("active");
});





