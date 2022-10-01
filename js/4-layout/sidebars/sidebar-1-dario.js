document.addEventListener('click', e => {
  if (e.target.closest("aside .dropdown-btn")) {
    e.target.closest("aside .dropdown").classList.toggle("dropdown-menu-open")
  }

  if (e.target.closest("aside .sub-dropdown-btn")) {
    e.target.closest("aside .sub-dropdown").classList.toggle("sub-dropdown-menu-open")
  }
})