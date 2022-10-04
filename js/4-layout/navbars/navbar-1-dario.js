const body = document.querySelector("body");
const darkSection = document.querySelector(".dark-section");
const lightSection = document.querySelector(".light-section");
const asideMobile = document.querySelector(".aside-mobile");
const asideDesktop = document.querySelector(".aside-desktop");
const toggle = document.querySelector(".toggle");

let lastScroll = 0;
document.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    darkSection.classList.remove("show");
    lightSection.classList.remove("show-dark");
  }
  
  if (currentScroll < lastScroll) {
    darkSection.classList.add("show");
    lightSection.classList.add("show-dark");
  }

  lastScroll = currentScroll;
})


let currentScroll;
let latestScroll;
document.addEventListener("click", e => {
  currentScroll = window.pageYOffset;
  if (!asideMobile.classList.contains("active") && e.target.closest(".toggle")) {
    document.documentElement.style.setProperty("--scroll", -currentScroll + "px");
    body.classList.add("sidebar-open");
    asideMobile.classList.add("active");
    asideDesktop.classList.add("active");
    latestScroll = currentScroll;
  }
})

document.addEventListener("click", e => {
  if (asideMobile.classList.contains("active")) {
    if (e.target.closest(".close-btn") || e.target.closest(".overlay")) {
      body.classList.remove("sidebar-open");
      asideMobile.classList.remove("active");
      asideDesktop.classList.remove("active");
      document.documentElement.scrollTop = latestScroll;
    }
  }
})