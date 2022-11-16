let sidebar = document.querySelector(".aside-mobile");

document.addEventListener('click', e => {
  if (e.target.closest(".aside-mobile .da-dropdown:nth-child(1) .dropdown-btn")) {
    e.target.closest(".aside-mobile .da-dropdown").classList.toggle("giochi-open")
  }

  if (e.target.closest(".aside-mobile .da-dropdown:nth-child(1) .da-dropdown-menu .da-sub-dropdown:nth-child(1) .sub-dropdown-btn")) {
    e.target.closest(".aside-mobile .da-dropdown").classList.toggle("esplora-giochi-open")
  }

  if (e.target.closest(".aside-mobile .da-dropdown:nth-child(1) .da-dropdown-menu .da-sub-dropdown:nth-child(2) .sub-dropdown-btn")) {
    e.target.closest(".aside-mobile .da-dropdown").classList.toggle("piattaforme-open")
  }

  if (e.target.closest(".aside-mobile .da-dropdown:nth-child(2) .dropdown-btn")) {
    e.target.closest(".aside-mobile .da-dropdown").classList.toggle("altre-esperienze-open")
  }

  if (e.target.closest(".aside-mobile .da-dropdown:nth-child(3) .dropdown-btn")) {
    e.target.closest(".aside-mobile .da-dropdown").classList.toggle("informazioni-open")
  }

  if (e.target.closest(".aside-mobile .da-dropdown:nth-child(4) .dropdown-btn")) {
    e.target.closest(".aside-mobile .da-dropdown").classList.toggle("impegni-open")
  }

  if (e.target.closest(".aside-mobile .da-dropdown:nth-child(5) .dropdown-btn")) {
    e.target.closest(".aside-mobile .da-dropdown").classList.toggle("risorse-open")
  }

  if (e.target.closest(".aside-mobile .sub-dropdown-btn")) {
    e.target.closest(".aside-mobile .da-sub-dropdown").classList.toggle("sub-dropdown-menu-open")
  }
})