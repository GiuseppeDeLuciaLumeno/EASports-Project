// OPEN & CLOSE slider's dropdown mobile version -------------------------------------------------

//activate tab on click
document.addEventListener('click', e => {
  let dropdown = document.querySelector(".slider-container .dropdown");
  
  if (e.target.closest(".dropdown") != null) {
    dropdown.classList.add("active");
  };

  if (e.target.closest(".dropdown") === null) {
    dropdown.classList.remove("active");
  };
})

const arrows = document.querySelectorAll(".arrow-container")
const arrowSX = document.querySelector(".arrow-container-left")
const arrowDX = document.querySelector(".arrow-container-right")
const sliderContainer = document.querySelector(".wrapper-div")
const sliderTabs = document.querySelector(".wrapper-div ul")
const startEvents = ["mousedown", "touchstart"]
const endEvents = ["mouseup", "mouseleave", "touchend"]
const moveEvents = ["mousemove", "touchmove"]

let tabsWidth //how long the slider is
let sliderContainerWidth //how much available space is for the slider to show
let slidePosition = 0 //how much the slider il slided
let maxSlide //how much sliding is needed for the slider to reach the end
let movement //how much the slider il slided at every click
let previousWindowWidth = window.innerWidth //browser window width
let pressed = false //if the slider is being pressed or not
let startX

// get the actual width of an element content box
function getContentWidth(elem) {
    const computedStyles = window.getComputedStyle(elem)
    const elemWidth = elem.clientWidth
    return elemWidth - parseFloat(computedStyles.paddingLeft) - parseFloat(computedStyles.paddingRight)
}

// adjust slider's sliding position to look good also on window's resizing
function makeSliderFollowResizing() {
    sliderTabs.style.transition = "none" //remove sliding transition to make the slider instantly follow window's resizing
    const newWindowWidth = window.innerWidth //get the new window's width to check if it's widening or shrinking
    
    //if you widen the page...
    if (newWindowWidth > previousWindowWidth) {
        //and there's some sliding needed for the slider to reach the end...
        if (maxSlide > 0) {
            //but the slider is slided more than the max value available
            if (slidePosition > maxSlide) {
                slidePosition = maxSlide
                sliderTabs.style.transform = `translateX(${-slidePosition}px)`
            }
        // if instead no sliding is needed since the available space is enough
        } else if (maxSlide <= 0) {
            slidePosition = 0
            sliderTabs.style.transform = `translateX(${-slidePosition}px)`
        }
    }
    
    // update the window's page for new comparison if page's resized
    previousWindowWidth = newWindowWidth

    // wait for everything needed to be ended, then...
    setTimeout(() => {
        sliderTabs.style.transition = "transform 0.4s"
    })
}

//when to show which arrow
function hideShowArrows() {
    // if scroll is needed...
    if (tabsWidth > sliderContainerWidth) {
        // and the slider is nor at the start or at the end
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

//set the magic needed for the slider to work ;-)
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

function dragSlider() {
    startEvents.forEach(eventTupe => {
        sliderContainer.addEventListener(eventTupe, e => {
            pressed = true
            startX = e.pageX
        })
    })
    
    endEvents.forEach(eventTupe => {
        window.addEventListener(eventTupe, () => {
            pressed = false
        })
    })

    moveEvents.forEach(eventTupe => {
        window.addEventListener(eventTupe, e => {
            if (!pressed) return
    
            e.preventDefault()
            const x = e.pageX
            slidePosition += startX - x
            
            sliderTabs.style.transition = "none"
            if (slidePosition < 0) slidePosition = 0
            else if (slidePosition > maxSlide) slidePosition = maxSlide
            sliderTabs.style.transform = `translateX(${-slidePosition}px)`
            setTimeout(() => {
                sliderTabs.style.transition = "transform 0.4s"
            }, 500)
    
            startX = x
            hideShowArrows()
        })
    })
}

// ACTUAL FUNCTIONING CODE
window.addEventListener("load", () => {
    setSlider()
    dragSlider()
})

slideSlider(arrowSX)
slideSlider(arrowDX)

window.addEventListener("resize", () => {
    setSlider()
})