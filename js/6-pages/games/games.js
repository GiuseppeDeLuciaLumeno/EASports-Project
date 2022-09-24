const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");

asideShow.addEventListener("click", () => {
    asideShow.classList.toggle("active");
});


asidehide.addEventListener("click", () => {
    asideShow.classList.remove("active");
});



const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
});

asidehide.addEventListener("click", () => {
    burger.classList.remove("active");
});