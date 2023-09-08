// Render (re-render) country cards
function renderItems(items) {
  const itemsList = document.querySelector(".cards-wrapper");
  itemsList.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const item = document.createElement("section");
    item.classList.add("card");
    item.innerHTML = `          
        <img
            class="card__image"
            src=${items[i].flags.svg}
            alt=${items[i].name.common}
            title=${items[i].name.common}
        />
        <h2 class="card__heading">${items[i].name.common}</h2>
        <section class="card__description-wrapper">
          <p class="card__description">
            Population: <span class="card__description-data">${items[i].population}</span>
          </p>
          <p class="card__description">
            Region: <span class="card__description-data">${items[i].region}</span>
          </p>
            <p class="card__description">
              Capital: <span class="card__description-data">${items[i].capital[0]}</span>
            </p>
        </section>`;
    itemsList.append(item);
  }
}

// Toggle theme color of page (light/dark)
function toggleThemeColor() {
  const body = document.querySelector(".body-wrapper");
  const header = document.querySelector(".header-wrapper");
  const button = document.querySelector(".button");
  body.classList.toggle("body-wrapper--dark");
  header.classList.toggle("header-wrapper--dark");
  button.classList.toggle("button--dark");
}

export { renderItems, toggleThemeColor };
