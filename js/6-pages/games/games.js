const modal = document.querySelector(".modal-wrapper");
const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");
const esc = document.querySelector(".icon-x");
const blackBackground = document.querySelector(".lower-header");
const body = document.querySelector(".click-out");
const blackBlock = document.querySelector(".black-block");
const personIcon = document.getElementById("person-icon")

//Aside Menu activate with dots
asideShow.addEventListener("click", () => {
    asideShow.classList.toggle("active");
    blackBackground.classList.toggle("active");
   /*  modal.showModal() */;
});

//Aside Menu Disactivate with I-icon
asidehide.addEventListener("click", () => {
   asideShow.classList.remove("active");
   blackBackground.classList.remove("active");
 /*   modal.close(); */
});

//Aside Menu Disactivate width Esc key
window.addEventListener("keydown", keypress);
  function keypress(key) {
    if (key.keyCode == 27) {
        asideShow.classList.remove("active");
        blackBackground.classList.remove("active");
    }
  }

//Aside Menu Disactivate by clicking anywhere else
window.addEventListener("mouseup", function(event) {
  if (event.target == body) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
    myModal.classList.remove("active");
  }

  else if (event.target == blackBackground) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
    myModal.classList.remove("active");
  }

  else if (event.target == blackBlock || event.target == personIcon) {
    myModal.classList.remove("active");
  }
});


//Aside Menu activate with burger menu
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    blackBackground.classList.toggle("active");
});

asidehide.addEventListener("click", () => {
    burger.classList.remove("active");
});




//Modal Interrogative point
const interrogative = document.getElementById("open-modal");
const myModal = document.getElementById("fixed");
const iconX = document.getElementById("icon-x-modal");

interrogative.addEventListener("click", () => {
  myModal.classList.toggle("active");
});

iconX.addEventListener("click", () => {
  myModal.classList.remove("active");
})





