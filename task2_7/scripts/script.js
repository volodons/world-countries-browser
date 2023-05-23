const itemsList = document.querySelector(".cards-wrapper");

function getAllCountriesData() {
  const apiUrl =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => renderItems(response))
    .catch((error) => console.log("Error:", error));
}

function renderItems(items) {
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
        <p class="card__heading">${items[i].name.common}</p>
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

getAllCountriesData();
