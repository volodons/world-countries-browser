import {
  getAllCountriesData,
  getCountryDataByName,
  getRegionDataByName,
} from "./api.js";

import { renderItems } from "./ui.js";

// Get user's text input
function getRegionName(event) {
  const formData = new FormData(event.currentTarget);
  const regionName = formData.get("searchByRegion");
  getRegionDataByName(regionName).then(renderItems);
}

// Get user's select input
function getCountryName(event) {
  const formData = new FormData(event.currentTarget);
  const countryName = formData.get("searchByName");
  if (!/^\s*$/.test(countryName)) {
    getCountryDataByName(countryName);
  }
  getAllCountriesData();
}

export { getRegionName, getCountryName };
