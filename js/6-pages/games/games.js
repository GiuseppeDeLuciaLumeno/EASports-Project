const modal = document.querySelector(".modal-wrapper");
const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");
const esc = document.querySelector(".icon-x");
const blackBackground = document.querySelector(".lower-header");
const body = document.querySelector(".click-out");
/* const blackBlock = document.querySelector(".lower-header");
const lowerHeader = document.querySelector(".lower-header"); */
const personIcon = document.getElementById("person-icon");
const html = document.querySelector("body");
const cardsIndex = document.querySelector(".cards-wrapper")


//Aside Menu activate with dots

  asideShow.addEventListener("click", () => {
    let bar = window.scrollY || document.documentElement.scrollTop;
    asideShow.classList.toggle("active");
    blackBackground.classList.toggle("active");
    html.classList.add("overflow-lock-scroll");
    cardsIndex.classList.add("z-index-1");
});


//When scroll is rather or lower than 100px

/* window.addEventListener("scroll", () =>{
  if (window.scrollY > 100) {
     console.log("Maggiore di 100px");
  } else if (window.scrollY > 200) {
    console.log("MAggiore di 200px")
  }
}); */



//Aside Menu Disactivate with Icon-X
asidehide.addEventListener("click", () => {
   asideShow.classList.remove("active");
   blackBackground.classList.remove("active");
   html.classList.remove("overflow-lock-scroll");
   cardsIndex.classList.remove("z-index-1");
});




//Aside Menu Disactivate width Esc key
window.addEventListener("keydown", keypress);
  function keypress(key) {
    if (key.keyCode === 27) {
        asideShow.classList.remove("active");
        blackBackground.classList.remove("active");
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
  }

  else if (event.target === blackBackground) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
    myModal.classList.remove("active");
    firstModal.classList.remove("active");
    html.classList.remove("overflow-lock-scroll");
    cardsIndex.classList.remove("z-index-1");
  }

  else if (event.target === personIcon) {
    myModal.classList.remove("active");
  }

});


//Aside Menu activate with burger menu
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    blackBackground.classList.toggle("active");
    cardsIndex.classList.add("z-index-1");
});

asidehide.addEventListener("click", () => {
    burger.classList.remove("active");
});


//First Modal Person Icon
const firstModal = document.getElementById("fixed-first-modal");
const firstIconX = document.getElementById("icon-x-modal");
personIcon.addEventListener("click", () => {
firstModal.classList.toggle("active");
html.classList.add("overflow-lock-scroll");
});

//close First modal
firstIconX.addEventListener("click", () => {
  firstModal.classList.remove("active");
  blackBackground.classList.remove("active");
  html.classList.remove("overflow-lock-scroll");
})


//Second-Modal Interrogative point icon
const interrogative = document.getElementById("open-modal");
const myModal = document.querySelector(".second-modal-wrapper");
const iconX = document.getElementById("icon-x-second-modal");

interrogative.addEventListener("click", () => {
  myModal.classList.toggle("active");
  firstModal.classList.remove("active");
  html.classList.add("overflow-lock-scroll");
});

//Second Modal close
iconX.addEventListener("click", () => {
  myModal.classList.remove("active");
  html.classList.remove("overflow-lock-scroll");
})






