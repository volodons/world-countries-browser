import { renderItems } from "./ui.js";

// Get all countries data from API
function getAllCountriesData() {
  const apiUrl =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .then((data) => renderItems(data))
    .catch((error) => {
      console.error(error);
      const itemsList = document.querySelector(".cards-wrapper");
      const errorMessage = document.createElement("strong");
      errorMessage.innerText = "Error: reload your page or try again later";
      itemsList.append(errorMessage);
    });
}

// Get countries' data based on 1 user-specified region from API
function getRegionDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/region/${name}?fields=flags,name,population,region,capital`;
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .then((data) => renderItems(data))
    .catch((error) => {
      console.error(error);
      const itemsList = document.querySelector(".cards-wrapper");
      itemsList.innerHTML = "";
      const errorMessage = document.createElement("strong");
      errorMessage.innerText = "Error: reload your page or try again later";
      itemsList.append(errorMessage);
    });
}

// Get country (countries) data based on user-specified name from API
function getCountryDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/name/${name}?fields=flags,name,population,region,capital`;
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .then((data) => renderItems(data))
    .catch((error) => {
      console.error(error);
      const itemsList = document.querySelector(".cards-wrapper");
      itemsList.innerHTML = "";
      const errorMessage = document.createElement("strong");
      errorMessage.innerText =
        "Error: reload your page or try again later OR this country doesn't exist";
      itemsList.append(errorMessage);
    });
}

export { getAllCountriesData, getCountryDataByName, getRegionDataByName };
