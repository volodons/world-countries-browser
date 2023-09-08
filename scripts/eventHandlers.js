import {
  getAllCountriesData,
  getCountryDataByName,
  getRegionDataByName,
} from "./api.js";

import { renderItems } from "./ui.js";

// Get user's text input
function getRegionName(event) {
  const regionName = event.target.value;
  getRegionDataByName(regionName).then((data) => renderItems(data));
}

// Get user's select input
function getCountryName(event) {
  const countryName = event.target.value;
  if (!/^\s*$/.test(countryName)) {
    getCountryDataByName(countryName).then((data) => renderItems(data));
  } else {
    getAllCountriesData().then((data) => renderItems(data));
  }
}

export { getRegionName, getCountryName };
