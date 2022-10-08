const body = document.querySelector("body");
const darkSection = document.querySelector(".dark-section");
const lightSection = document.querySelector(".light-section");
const asideMobile = document.querySelector(".aside-mobile");
const asideDesktop = document.querySelector(".aside-desktop");
const toggle = document.querySelector(".toggle");

let lastScroll = 0;
function hideShowNavbar() {
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
}
document.addEventListener('scroll', hideShowNavbar)


let currentScroll;
let latestScroll;
document.addEventListener("click", e => {
  currentScroll = window.pageYOffset;
  if (!asideMobile.classList.contains("active")) {
    if (e.target.closest(".toggle")) {
      document.documentElement.style.setProperty("--scroll", -currentScroll + "px");
      body.classList.add("sidebar-open");
      asideMobile.classList.add("active");
      asideDesktop.classList.add("active");
      latestScroll = currentScroll;
    }
  } else if (asideMobile.classList.contains("active")) {
    if (e.target.closest(".close-btn") || e.target.closest(".overlay")) {
      body.classList.remove("sidebar-open");
      asideMobile.classList.remove("active");
      asideDesktop.classList.remove("active");
      document.documentElement.scrollTop = latestScroll;
    }
  }
})

document.addEventListener("click", e => {
  if (!darkSection.classList.contains("open")) {
    if (e.target.closest("svg.account") || e.target.closest("svg.help")) {
      document.documentElement.style.setProperty("--scroll", -currentScroll + "px");
      body.classList.add("navbar-open");
      darkSection.classList.add("open");
      latestScroll = currentScroll;
    } else return
  } else if (darkSection.classList.contains("open")) {
    if (e.target.closest(".dark-section") == null || e.target.closest("svg.close-x") || e.target.closest("svg.account") || e.target.closest("svg.help")) {
      document.removeEventListener("scroll", hideShowNavbar)
      body.classList.remove("navbar-open");
      darkSection.classList.remove("open");
      document.documentElement.scrollTop = latestScroll;
      setTimeout(() => document.addEventListener("scroll", hideShowNavbar), 501)
    } else return
  }
})