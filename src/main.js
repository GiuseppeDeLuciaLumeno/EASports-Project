const icons = document.querySelectorAll(".b-icon");

icons.forEach(icon => {
    icon.addEventListener("click", event => {
        icon.classList.toggle("active");
    });
    console.log("icone", icons);
});

