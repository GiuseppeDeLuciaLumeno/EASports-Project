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

//Funzione con onClick tramite codice Js (Da sviluppare condizione per ritorno allo status di default)
// document.getElementById('swapArrow').addEventListener('click', switchArrow);

// function switchArrow() {
//     let element = document.getElementById('arrow');
//     element.classList.remove('down');
//     element.classList.add('up');
// }

// Funzione con Html onClick (button="onClick...")
/*function swapArrow() {
	let element = document.getElementById('arrow');
	element.classList.remove('down');
    element.classList.add('up');
}
*/
// Josephine - Fine