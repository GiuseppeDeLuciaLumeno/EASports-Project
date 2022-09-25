const modal = document.querySelector(".modal-wrapper");
const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");
const esc = document.querySelector(".icon-x");
const allGames = document.querySelector(".all-games-block");
const cards = document.querySelector(".card-wrapper");

//Aside menu activate with dots
asideShow.addEventListener("click", () => {
    asideShow.classList.toggle("active");
    modal.showModal();
});

//Aside menu Disactivate with I-icon
asidehide.addEventListener("click", () => {
   asideShow.classList.remove("active");
   modal.close();
});

//Aside menu Disactivate width Esc key
window.addEventListener("keydown", keypress);
  function keypress(key) {
    if (key.keyCode == 27) {
        asideShow.classList.remove("active");
    }
  }

//Aside menu Disactivate by clicking anywhere else



//Aside menu activate with burger menu
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
});

asidehide.addEventListener("click", () => {
    burger.classList.remove("active");
});





