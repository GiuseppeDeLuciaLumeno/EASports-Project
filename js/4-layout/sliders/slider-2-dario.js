// OPEN & CLOSE slider's dropdown mobile version -------------------------------------------------

document.addEventListener('click', e => {
  let dropdown = document.querySelector("#slider-section .dropdown");
  
  if (e.target.closest(".dropdown") != null) {
    dropdown.classList.add("active");
  };

  if (e.target.closest(".dropdown") === null) {
    dropdown.classList.remove("active");
  };
})