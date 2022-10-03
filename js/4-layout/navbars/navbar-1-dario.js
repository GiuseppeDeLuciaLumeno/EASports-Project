// HIDE & SHOW navbar on scroll down/up ------------------------------------------------------------

let navbar = document.querySelector(".navbar");
let asideMobile = document.querySelector(".aside-mobile");
let asideDesktop = document.querySelector(".aside-desktop")
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
  if (!asideMobile.classList.contains("active") && e.target.closest(".toggle")) {
    asideMobile.classList.add("active");
    navbar.classList.remove("hidden")
  } else if (asideMobile.classList.contains("active") && window.pageYOffset > 0 && e.target.closest(".aside-mobile") == null) {
    asideMobile.classList.remove("active");
    navbar.classList.add("hidden")
  } else if (asideMobile.classList.contains("active") && window.pageYOffset == 0 && e.target.closest(".aside-mobile") == null) {
    asideMobile.classList.remove("active");
  } else if (asideMobile.classList.contains("active") && window.pageYOffset > 0 && e.target.closest(".close-btn")) {
    asideMobile.classList.remove("active");
    navbar.classList.add("hidden")
  } else if (asideMobile.classList.contains("active") && window.pageYOffset == 0 && e.target.closest(".close-btn")) {
    asideMobile.classList.remove("active");
  }
  
  if (!asideDesktop.classList.contains("active") && e.target.closest(".toggle")) {
    asideDesktop.classList.add("active");
    navbar.classList.remove("hidden")
  } else if (asideDesktop.classList.contains("active") && window.pageYOffset > 0 && e.target.closest(".aside-desktop") == null) {
    asideDesktop.classList.remove("active");
    navbar.classList.add("hidden")
  } else if (asideDesktop.classList.contains("active") && window.pageYOffset == 0 && e.target.closest(".aside-desktop") == null) {
    asideDesktop.classList.remove("active");
  } else if (asideDesktop.classList.contains("active") && window.pageYOffset > 0 && e.target.closest(".close-btn")) {
    asideDesktop.classList.remove("active");
    navbar.classList.add("hidden")
  } else if (asideDesktop.classList.contains("active") && window.pageYOffset == 0 && e.target.closest(".close-btn")) {
    asideDesktop.classList.remove("active");
  }
})