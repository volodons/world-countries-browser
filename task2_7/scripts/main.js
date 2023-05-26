import { getRegionName, getCountryName } from "./eventHandlers.js";
import { getAllCountriesData } from "./api.js";
import { renderItems, toggleThemeColor } from "./ui.js";

// Select forms and button
const themeColorButton = document.querySelector(".button");
const textForm = document.querySelector("#text-form");
const selectForm = document.querySelector("#select-form");

// Add debounce
const debouncedGetCountryName = debounce(getCountryName, 300);
function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Attach event listeners to forms and button
themeColorButton.addEventListener("click", toggleThemeColor);
textForm.addEventListener("input", debouncedGetCountryName);
selectForm.addEventListener("input", getRegionName);

// Initial call of function to get all countries data from API
getAllCountriesData().then((data) => renderItems(data));
