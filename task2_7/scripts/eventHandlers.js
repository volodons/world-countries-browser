import { getCountryDataByName, getRegionDataByName } from "./api.js";

function getRegionName(event) {
  const formData = new FormData(event.currentTarget);
  const regionName = formData.get("searchByRegion");
  getRegionDataByName(regionName);
}

function getCountryName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const countryName = formData.get("searchByName");
  getCountryDataByName(countryName);
}

export { getRegionName, getCountryName };
