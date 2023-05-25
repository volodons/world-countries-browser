import {
  getAllCountriesData,
  getCountryDataByName,
  getRegionDataByName,
} from "./api.js";

// Get user's text input
function getRegionName(event) {
  const formData = new FormData(event.currentTarget);
  const regionName = formData.get("searchByRegion");
  getRegionDataByName(regionName);
}

let timeoutId;

// Get user's select input
function getCountryName(event) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const formData = new FormData(event.currentTarget);
    const countryName = formData.get("searchByName");
    if (!/^\s*$/.test(countryName)) {
      getCountryDataByName(countryName);
    }
    getAllCountriesData();
  }, 1000);
}

export { getRegionName, getCountryName };
