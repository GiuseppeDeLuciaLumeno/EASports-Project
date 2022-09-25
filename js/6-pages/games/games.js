const modal = document.querySelector(".modal-wrapper");
const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");
const esc = document.querySelector(".icon-x");

asideShow.addEventListener("click", () => {
    asideShow.classList.toggle("active");
    modal.showModal();
});


asidehide.addEventListener("click", () => {
   asideShow.classList.remove("active");
   modal.close();
});

window.addEventListener("keydown", keypress);
  function keypress(key) {
    if (key.keyCode == 27) {
        asideShow.classList.remove("active");
    }
  }


const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
});

asidehide.addEventListener("click", () => {
    burger.classList.remove("active");
});




//Autofocus:


