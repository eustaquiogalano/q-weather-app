import { displayWeatherData } from './DOM_manager';
import { fetchWeatherData } from './fetcher';

export function initSearchCityButton() {
  document
    .querySelector('#search-city-button')
    .addEventListener('click', () => {
      const location = document.querySelector('#location-input');
      fetchWeatherData(location.value).then(locationResult => {
        console.log(locationResult);
        displayWeatherData(locationResult);
      });

      location.value = '';
    });
}
