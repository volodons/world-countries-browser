import { renderItems } from "./ui.js";

function getAllCountriesData() {
  const apiUrl =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => renderItems(data))
    .catch((error) => console.log("Error:", error));
}

function getRegionDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/region/${name}?fields=flags,name,population,region,capital`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => renderItems(data))
    .catch((error) => console.log("Error", error));
}

function getCountryDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/name/${name}?fields=flags,name,population,region,capital`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => renderItems(data))
    .catch((error) => console.log("Error", error));
}

export { getAllCountriesData, getCountryDataByName, getRegionDataByName };
