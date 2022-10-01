// HIDE & SHOW navbar on scroll down/up ------------------------------------------------------------

let navbar = document.querySelector(".navbar");
let aside = document.querySelector("aside");
let lastScroll = 0;

document.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove("hidden");
  }

  if (currentScroll > lastScroll) {
    navbar.classList.add("hidden");
  }
  
  if (currentScroll < lastScroll) {
    navbar.classList.remove("hidden");
  }

  lastScroll = currentScroll;
})

document.addEventListener('click', e => {
  if (e.target.closest(".toggle")) {
    aside.classList.add("active");
    navbar.classList.remove("hidden")
  }
})