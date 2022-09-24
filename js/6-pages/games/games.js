const asideShow = document.querySelector(".three-dots-container");
const asidehide = document.getElementById("icon-x");

asideShow.addEventListener("click", () => {
    asideShow.classList.toggle("active");
});


asidehide.addEventListener("click", () => {
    asideShow.classList.remove("active");
});

