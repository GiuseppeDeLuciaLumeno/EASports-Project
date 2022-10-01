const modal = document.querySelector(".modal-wrapper");
const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");
const esc = document.querySelector(".icon-x");
const blackBackground = document.querySelector(".lower-header");
const body = document.querySelector(".click-out");
const blackBlock = document.querySelector(".black-block");
const personIcon = document.getElementById("person-icon");


//Aside Menu activate with dots
asideShow.addEventListener("click", () => {
    asideShow.classList.toggle("active");
    blackBackground.classList.toggle("active");
   document.body.style.overflow = "hidden";
});

//Aside Menu Disactivate with Icon-X
asidehide.addEventListener("click", () => {
   asideShow.classList.remove("active");
   blackBackground.classList.remove("active");
   document.body.style.overflow ="auto";
 /*   modal.close(); */
});

//Aside Menu Disactivate width Esc key
window.addEventListener("keydown", keypress);
  function keypress(key) {
    if (key.keyCode === 27) {
        asideShow.classList.remove("active");
        blackBackground.classList.remove("active");
        document.body.style.overflow ="auto";
    }
  }

//Aside Menu Disactivate by clicking anywhere else
window.addEventListener("mouseup", (event) => {
  if (event.target === body) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
    myModal.classList.remove("active");
    firstModal.classList.remove("active");
    document.body.style.overflow ="auto";
  }

  else if (event.target === blackBackground) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
    myModal.classList.remove("active");
    document.body.style.overflow ="auto";
  }

  else if (event.target === personIcon) {
    myModal.classList.remove("active");
    document.body.style.overflow ="auto";
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
    document.body.style.overflow ="auto";
});


//First-Modal Person Icon
const firstModal = document.getElementById("fixed-first-modal");
const firstIconX = document.getElementById("icon-x-modal")
personIcon.addEventListener("click", () => {
firstModal.classList.toggle("active");
});

firstIconX.addEventListener("click", () => {
  firstModal.classList.remove("active");
})


//Second-Modal Interrogative point icon
const interrogative = document.getElementById("open-modal");
const myModal = document.querySelector(".fixed");
const iconX = document.getElementById("icon-x-second-modal");

interrogative.addEventListener("click", () => {
  myModal.classList.toggle("active");
  firstModal.classList.remove("active");
});

iconX.addEventListener("click", () => {
  myModal.classList.remove("active");
})




