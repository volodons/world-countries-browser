// Get all countries data from API
function getAllCountriesData() {
  const apiUrl =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

// Get countries' data based on 1 user-specified region from API
function getRegionDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/region/${name}?fields=flags,name,population,region,capital`;
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

// Get country (countries) data based on user-specified name from API
function getCountryDataByName(name) {
  const apiUrl = `https://restcountries.com/v3.1/name/${name}?fields=flags,name,population,region,capital`;
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getAllCountriesData, getCountryDataByName, getRegionDataByName };
