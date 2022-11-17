import cardsAttributes from "../cards/cards-DataBase";

document.addEventListener("DOMContentLoaded", () => {
    cardsAttributes.forEach(item => {
      const cardsContainer = document.createElement("div")
      cardsContainer.id = item.containerId

      cardsContainer.innerHTML = `
    <a href="#">
      <div class="${item.class}">
          <img src="${item.imgSrc}"
              alt="${item.imgAlt}">
          <div class="${item.logoClass}">
              <img src="${item.logoSrc}"
                  alt="${item.imgAlt}" width="${item.logoWidth}">
          </div>
          <p>Sito ufficiale</p>
      </div>
  </a>`
      const cardsWrapper = document.querySelector(".cards-wrapper")
      cardsWrapper.appendChild(cardsContainer)
    });
  })
