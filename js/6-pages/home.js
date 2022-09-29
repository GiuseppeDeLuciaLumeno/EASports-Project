// ----------------------------------------------------------------------------------------------
// Giuseppe - inizio ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

const icons = document.querySelectorAll(".b-icon");

icons.forEach(icon => {
    icon.addEventListener("click", event => {
        icon.classList.toggle("active");
    });
    console.log("icone", icons);
});

// ----------------------------------------------------------------------------------------------
// Giuseppe - fine ------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// Josephine - Inizio Test

function swapArrow() {
	let element = document.getElementById('arrow');
	element.classList.remove('down');
    element.classList.add('up');
}

// Josephine - Fine