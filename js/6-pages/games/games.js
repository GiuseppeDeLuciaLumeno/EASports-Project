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
let currentScroll;
let latestScroll;

  asideShow.addEventListener("click", (e) => {
    currentScroll = window.scrollY;
    if (!asidehide.classList.contains("active")) {     //SE L'ASIDE NON E' DIVERSO DAL CONTENERE ACTIVE
     document.documentElement.style.setProperty("--scroll", -currentScroll + "px");//to set Body scroll To zero
     html.classList.add("overflow-lock-scroll");
     asideShow.classList.toggle("active");
     blackBackground.classList.toggle("active");
     cardsIndex.classList.add("z-index-1");

    latestScroll = currentScroll;
  }
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
   html.classList.remove("overflow-lock-scroll");
   asideShow.classList.remove("active");
   blackBackground.classList.remove("active");
   cardsIndex.classList.remove("z-index-1");
   document.documentElement.scrollTop = latestScroll;
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
  document.documentElement.style.setProperty("--scroll", -currentScroll + "px"); //FAR RICORDARE LO SCROLL A JAVA; MA SERVONO ANCHE LE ULTIME DUE
  if (event.target === body) {
    asideShow.classList.remove("active");
    blackBackground.classList.remove("active");
    burger.classList.remove("active");
    myModal.classList.remove("active");
    firstModal.classList.remove("active");
    body.classList.remove("active");
    html.classList.remove("overflow-lock-scroll");
    document.documentElement.scrollTop = latestScroll;
    lastScroll = currentScroll
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

//RICORDA  LO SCROLL SUL CLICK ANYWHERE ELSE PER I MODAL







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



const firstModal = document.getElementById("fixed-first-modal");
const firstIconX = document.getElementById("icon-x-modal");

//First Modal OPEN
  personIcon.addEventListener("click", (e) => {
    currentScroll = window.scrollY;
    if (!asidehide.classList.contains("active")) {     //SE L'ASIDE NON E' DIVERSO DAL CONTENERE ACTIVE
     document.documentElement.style.setProperty("--scroll", -currentScroll + "px");//to set Body scroll To zero
     firstModal.classList.toggle("active");
     html.classList.add("overflow-lock-scroll");
     body.classList.add("active");

     latestScroll = currentScroll;
  }
});


//close First modal
firstIconX.addEventListener("click", () => {
  firstModal.classList.remove("active");
  blackBackground.classList.remove("active");
  html.classList.remove("overflow-lock-scroll");
  body.classList.remove("active");
  document.documentElement.scrollTop = latestScroll;
})


//Second-Modal OPEN
const interrogative = document.getElementById("open-modal");
const myModal = document.querySelector(".second-modal-wrapper");
const iconX = document.getElementById("icon-x-second-modal");

interrogative.addEventListener("click", (e) => {
  currentScroll = window.scrollY;
  if (!asidehide.classList.contains("active")) {
    document.documentElement.style.setProperty("--scroll", -currentScroll + "px");
    myModal.classList.toggle("active");
    firstModal.classList.remove("active");
    html.classList.add("overflow-lock-scroll");
    body.classList.add("active");
    lastScroll = currentScroll;
    console.log(lastScroll)
  }
});

//Close second Modal
iconX.addEventListener("click", () => {
  myModal.classList.remove("active");
  html.classList.remove("overflow-lock-scroll");
  body.classList.remove("active");
  document.documentElement.scrollTop = latestScroll;
})

