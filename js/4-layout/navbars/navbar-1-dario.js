// HIDE & SHOW navbar on scroll down/up ------------------------------------------------------------

let navbar = document.querySelector(".navbar");
let aside = document.querySelector(".aside-mobile");
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
  if (!aside.classList.contains("active") && e.target.closest(".toggle")) {
    aside.classList.add("active");
    navbar.classList.remove("hidden")
  } else if (aside.classList.contains("active") && window.pageYOffset > 0 && e.target.closest("aside") == null) {
    aside.classList.remove("active");
    navbar.classList.add("hidden")
  } else if (aside.classList.contains("active") && window.pageYOffset == 0 && e.target.closest("aside") == null) {
    aside.classList.remove("active");
  } else if (aside.classList.contains("active") && window.pageYOffset > 0 && e.target.closest(".close-btn")) {
    aside.classList.remove("active");
    navbar.classList.add("hidden")
  } else if (aside.classList.contains("active") && window.pageYOffset == 0 && e.target.closest(".close-btn")) {
    aside.classList.remove("active");
  }
})