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
// ----------------------------------------------------------------------------------------------
// Dario - fine ---------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------