import { getRegionName, getCountryName } from "./eventHandlers.js";
import { getAllCountriesData } from "./api.js";
import { renderItems, toggleThemeColor } from "./ui.js";

// Select forms and button
const themeColorButton = document.querySelector(".button");
const textForm = document.querySelector("#text-form");
const selectForm = document.querySelector("#select-form");

const debouncedGetCountryName = debounce(getCountryName, 1000);

// Attach event listeners to forms and button
themeColorButton.addEventListener("click", toggleThemeColor);
textForm.addEventListener("input", debouncedGetCountryName);
selectForm.addEventListener("input", getRegionName);

// Add debounce
function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Initial call of function to get all countries data from API
getAllCountriesData().then(renderItems(items));
