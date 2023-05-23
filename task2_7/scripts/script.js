"use strict";

const themeColorButton = document.querySelector(".button");
const itemsList = document.querySelector(".cards-wrapper");
const textForm = document.querySelector("#text-form");
const selectForm = document.querySelector("#select-form");

themeColorButton.addEventListener("click", toggleThemeColor);
textForm.addEventListener("submit", getCountryName);
selectForm.addEventListener("input", getRegionName);

function toggleThemeColor() {
  const body = document.querySelector(".body-wrapper");
  const header = document.querySelector(".header-wrapper");
  body.classList.toggle("body-wrapper--dark");
  header.classList.toggle("header-wrapper--dark");
  themeColorButton.classList.toggle("button--dark");
}

function getRegionName(event) {
  const formData = new FormData(event.currentTarget);
  const regionName = formData.get("searchByRegion");
  getRegionDataByName(regionName);
}

function getRegionDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/region/${name}?fields=flags,name,population,region,capital`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => renderItems(response))
    .catch((error) => console.log("Error", error));
}

function getCountryName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const countryName = formData.get("searchByName");
  getCountryDataByName(countryName);
}

function getCountryDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/name/${name}?fields=flags,name,population,region,capital`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => renderItems(response))
    .catch((error) => console.log("Error", error));
}

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
