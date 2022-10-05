//MEMORIZZA LO SCROLL DOWN O UP AD OGNI SINGOLO SCROLL MA USANDO ELSE

/*let blackBlock = document.querySelector(".black-block");
let whiteBlock = document.querySelector(".lower-header");
let lastScrollTop = 0;

window.addEventListener("scroll", () =>{
  let st = window.scrollY || document.documentElement.scrollTop;
   if (st > lastScrollTop){
    console.log("VADO GIU");
    blackBlock.classList.remove(".black-block-show");

    } else {
      console.log("VADO SU");
   }

   lastScrollTop = st <= 0 ? 0 : st;
}, false); */

//PORTA L HEADER IN BASSO SE LO SROLL Y E IN BASSO, IN ALTO SE LO SCROLL Y E' IN ALTO

let blackBlock = document.querySelector(".black-block");
let whiteBlock = document.querySelector(".lower-header");
let lastScrollTop = 0;

document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    console.log("VADO GIU");
    blackBlock.classList.remove("black-block-show");
    whiteBlock.classList.remove("lower-header-show");


  } if (currentScroll < lastScrollTop) {
    console.log("VADO SU");
    blackBlock.classList.add("black-block-show");
    whiteBlock.classList.add("lower-header-show");
  }

  lastScrollTop = currentScroll;

})

