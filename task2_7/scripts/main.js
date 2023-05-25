import { getRegionName, getCountryName } from "./eventHandlers.js";
import { getAllCountriesData } from "./api.js";
import { toggleThemeColor } from "./ui.js";

// Select forms and button
const themeColorButton = document.querySelector(".button");
const textForm = document.querySelector("#text-form");
const selectForm = document.querySelector("#select-form");

// Attach event listeners to forms and button
themeColorButton.addEventListener("click", toggleThemeColor);
textForm.addEventListener("input", getCountryName);
selectForm.addEventListener("input", getRegionName);

// Initial call of function to get all countries data from API
getAllCountriesData();
