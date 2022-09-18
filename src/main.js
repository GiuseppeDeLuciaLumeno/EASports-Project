const icons = document.querySelectorAll(".b-icon");

icons.forEach(icon => {
    icon.addEventListener("click", event => {
        icon.classList.toggle("active");
    });
    console.log("icone", icons);
});

//start of dropdown menu header daniele

const subMenu1 = document.querySelector(".sub-menu-altreesperienze");
subMenu1.addEventListener('click', ()=>{
    //get dropdown menu
    subMenu1.classList.toggle("hide");
    //remove hide class

})