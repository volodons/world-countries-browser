import { getCountryDataByName, getRegionDataByName } from "./api.js";

// Get user's text input
function getRegionName(event) {
  const formData = new FormData(event.currentTarget);
  const regionName = formData.get("searchByRegion");
  getRegionDataByName(regionName);
}

// Get user's select input
function getCountryName(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const countryName = formData.get("searchByName");
  if (!/^\s*$/.test(countryName)) {
    getCountryDataByName(countryName);
  }
}

export { getRegionName, getCountryName };
