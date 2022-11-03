// ----------------------------------------------------------------------------------------------
// Dario - inizio -------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// Activate slider's tab on click ---------------------------------------------------------------
const tabs = document.querySelectorAll('.slider-tab-container');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab2 => tab2.classList.remove('active'));
        this.classList.add('active');
    })
})

// Show slider's tabs corrisponding set of cards ------------------------------------------------
function show1() {
    document.querySelector(".cards-container-1").classList.add("cards-container-active");
    document.querySelector(".cards-container-2").classList.remove("cards-container-active");
    document.querySelector(".cards-container-3").classList.remove("cards-container-active");
    document.querySelector(".cards-container-4").classList.remove("cards-container-active");
    document.querySelector(".cards-container-5").classList.remove("cards-container-active");
    document.querySelector(".cards-container-6").classList.remove("cards-container-active");
    document.querySelector(".cards-container-7").classList.remove("cards-container-active");
    document.querySelector(".cards-container-8").classList.remove("cards-container-active");
}

function show2() {
    document.querySelector(".cards-container-1").classList.remove("cards-container-active");
    document.querySelector(".cards-container-2").classList.add("cards-container-active");
    document.querySelector(".cards-container-3").classList.remove("cards-container-active");
    document.querySelector(".cards-container-4").classList.remove("cards-container-active");
    document.querySelector(".cards-container-5").classList.remove("cards-container-active");
    document.querySelector(".cards-container-6").classList.remove("cards-container-active");
    document.querySelector(".cards-container-7").classList.remove("cards-container-active");
    document.querySelector(".cards-container-8").classList.remove("cards-container-active");
}

function show3() {
    document.querySelector(".cards-container-1").classList.remove("cards-container-active");
    document.querySelector(".cards-container-2").classList.remove("cards-container-active");
    document.querySelector(".cards-container-3").classList.add("cards-container-active");
    document.querySelector(".cards-container-4").classList.remove("cards-container-active");
    document.querySelector(".cards-container-5").classList.remove("cards-container-active");
    document.querySelector(".cards-container-6").classList.remove("cards-container-active");
    document.querySelector(".cards-container-7").classList.remove("cards-container-active");
    document.querySelector(".cards-container-8").classList.remove("cards-container-active");
}

function show4() {
    document.querySelector(".cards-container-1").classList.remove("cards-container-active");
    document.querySelector(".cards-container-2").classList.remove("cards-container-active");
    document.querySelector(".cards-container-3").classList.remove("cards-container-active");
    document.querySelector(".cards-container-4").classList.add("cards-container-active");
    document.querySelector(".cards-container-5").classList.remove("cards-container-active");
    document.querySelector(".cards-container-6").classList.remove("cards-container-active");
    document.querySelector(".cards-container-7").classList.remove("cards-container-active");
    document.querySelector(".cards-container-8").classList.remove("cards-container-active");
}

function show5() {
    document.querySelector(".cards-container-1").classList.remove("cards-container-active");
    document.querySelector(".cards-container-2").classList.remove("cards-container-active");
    document.querySelector(".cards-container-3").classList.remove("cards-container-active");
    document.querySelector(".cards-container-4").classList.remove("cards-container-active");
    document.querySelector(".cards-container-5").classList.add("cards-container-active");
    document.querySelector(".cards-container-6").classList.remove("cards-container-active");
    document.querySelector(".cards-container-7").classList.remove("cards-container-active");
    document.querySelector(".cards-container-8").classList.remove("cards-container-active");
}

function show6() {
    document.querySelector(".cards-container-1").classList.remove("cards-container-active");
    document.querySelector(".cards-container-2").classList.remove("cards-container-active");
    document.querySelector(".cards-container-3").classList.remove("cards-container-active");
    document.querySelector(".cards-container-4").classList.remove("cards-container-active");
    document.querySelector(".cards-container-5").classList.remove("cards-container-active");
    document.querySelector(".cards-container-6").classList.add("cards-container-active");
    document.querySelector(".cards-container-7").classList.remove("cards-container-active");
    document.querySelector(".cards-container-8").classList.remove("cards-container-active");
}

function show7() {
    document.querySelector(".cards-container-1").classList.remove("cards-container-active");
    document.querySelector(".cards-container-2").classList.remove("cards-container-active");
    document.querySelector(".cards-container-3").classList.remove("cards-container-active");
    document.querySelector(".cards-container-4").classList.remove("cards-container-active");
    document.querySelector(".cards-container-5").classList.remove("cards-container-active");
    document.querySelector(".cards-container-6").classList.remove("cards-container-active");
    document.querySelector(".cards-container-7").classList.add("cards-container-active");
    document.querySelector(".cards-container-8").classList.remove("cards-container-active");
}

function show8() {
    document.querySelector(".cards-container-1").classList.remove("cards-container-active");
    document.querySelector(".cards-container-2").classList.remove("cards-container-active");
    document.querySelector(".cards-container-3").classList.remove("cards-container-active");
    document.querySelector(".cards-container-4").classList.remove("cards-container-active");
    document.querySelector(".cards-container-5").classList.remove("cards-container-active");
    document.querySelector(".cards-container-6").classList.remove("cards-container-active");
    document.querySelector(".cards-container-7").classList.remove("cards-container-active");
    document.querySelector(".cards-container-8").classList.add("cards-container-active");
}
// ------------------------------------
// sliding functionality
// ------------------------------------

const arrows = document.querySelectorAll(".arrow-container")
const arrowSX = document.querySelector(".arrow-container-left")
const arrowDX = document.querySelector(".arrow-container-right")
const sliderContainer = document.querySelector(".wrapper-div")
const sliderTabs = document.querySelector(".wrapper-div ul")

let tabsWidth //how long the slider is
let sliderContainerWidth //how much available space is for the slider to show
let slidePosition = 0 //how much the slider il slided
let maxSlide //how much sliding is needed for the slider to reach the end
let movement //how much the slider il slided at every click
let previousWindowWidth = window.innerWidth //browser window width

// get the actual width of an element content box
function getContentWidth(elem) {
    const computedStyles = window.getComputedStyle(elem)
    const elemWidth = elem.clientWidth
    return elemWidth - parseFloat(computedStyles.paddingLeft) - parseFloat(computedStyles.paddingRight)
}

function makeSliderFollowResizing() {
    sliderTabs.style.transition = "none"
    const newWindowWidth = window.innerWidth
    
    if (newWindowWidth > previousWindowWidth) {
        if (maxSlide > 0) {
            if (slidePosition > maxSlide) {
                slidePosition = maxSlide
                sliderTabs.style.transform = `translateX(${-slidePosition}px)`
            }
        } else if (maxSlide <= 0) {
            slidePosition = 0
            sliderTabs.style.transform = `translateX(${-slidePosition}px)`
        }
    }
    
    previousWindowWidth = newWindowWidth
    setTimeout(() => {
        sliderTabs.style.transition = "transform 0.5s ease-in-out"
    })
}

//when to show which arrow
function hideShowArrows() {
    // if scroll is needed...
    if (tabsWidth > sliderContainerWidth) {
        // and the slider il nor at the start or at the end
        if (slidePosition > 0 && slidePosition < maxSlide) {
            arrowSX.style.display = "flex"
            arrowDX.style.display = "flex"
            sliderContainer.classList.add("hide-both")
            sliderContainer.classList.remove("hide-left")
            sliderContainer.classList.remove("hide-right")
        } //instead if it's at the start
        else if (slidePosition === 0) {
            arrowSX.style.display = "none"
            arrowDX.style.display = "flex"
            sliderContainer.classList.remove("hide-both")
            sliderContainer.classList.remove("hide-left")
            sliderContainer.classList.add("hide-right")
        } //instead if it's at the end 
        else if (slidePosition === maxSlide) {
            arrowSX.style.display = "flex"
            arrowDX.style.display = "none"
            sliderContainer.classList.remove("hide-both")
            sliderContainer.classList.add("hide-left")
            sliderContainer.classList.remove("hide-right")
        }
    } // instead if scroll is not needed 
    else {
        arrowSX.style.display = "none"
        arrowDX.style.display = "none"
        sliderContainer.classList.remove("hide-both")
        sliderContainer.classList.remove("hide-left")
        sliderContainer.classList.remove("hide-right")
    }
}

//set the magic needed for the slider to work
function setSlider() {
    tabsWidth = document.querySelector(".wrapper-div ul").offsetWidth //update how long the slider is
    sliderContainerWidth = getContentWidth(document.querySelector(".wrapper-div")) //update how much space is for the slider to show
    maxSlide = tabsWidth - sliderContainerWidth //calculate how much sliding is needed for the slider to reach the end with these new values
    movement = maxSlide * (sliderContainerWidth / (maxSlide * 2)) //determine a 'user-friendly' amount of scroll to be executed at every arrow click

    makeSliderFollowResizing()
    hideShowArrows()
}

//slide the slider on 'arrow click'
function slideSlider(arrow) {
    arrow.addEventListener("click", () => {
        if (arrow.classList.contains("arrow-container-right")) {
            slidePosition += movement
            if (slidePosition < maxSlide) {
                sliderTabs.style.transform = `translateX(${-slidePosition}px)`
            } else {
                sliderTabs.style.transform = `translateX(${-maxSlide}px)`
                slidePosition = maxSlide
            }
        } else {
            slidePosition -= movement
            if (slidePosition > 0) {
                sliderTabs.style.transform = `translateX(${-slidePosition}px)`
            } else {
                sliderTabs.style.transform = `translateX(0px)`
                slidePosition = 0
            }
        }
        hideShowArrows()
    })
}



window.addEventListener("load", () => {
    setSlider()
})

slideSlider(arrowSX)
slideSlider(arrowDX)

window.addEventListener("resize", () => {
    setSlider()
})
// ----------------------------------------------------------------------------------------------
// Dario - fine ---------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------