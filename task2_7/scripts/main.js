import { getRegionName, getCountryName } from "./eventHandlers.js";
import { getAllCountriesData } from "./api.js";
import { toggleThemeColor } from "./ui.js";

const themeColorButton = document.querySelector(".button");
const textForm = document.querySelector("#text-form");
const selectForm = document.querySelector("#select-form");

themeColorButton.addEventListener("click", toggleThemeColor);
textForm.addEventListener("submit", getCountryName);
selectForm.addEventListener("input", getRegionName);

getAllCountriesData();
