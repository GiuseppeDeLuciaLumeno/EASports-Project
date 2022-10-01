// HIDE & SHOW navbar on scroll down/up ------------------------------------------------------------

let navbar = document.querySelector(".navbar");
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