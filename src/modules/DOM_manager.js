const resolveAddress = document.querySelector('#resolve-address');
const timeZone = document.querySelector('#timezone');
const description = document.querySelector('#description');

const day1Temp = document.querySelector('#day-1-container > .temp > span');
const day1Date = document.querySelector('#day-1-container > .date');
const day1Description = document.querySelector(
  '#day-1-container > .description'
);

const day2Temp = document.querySelector('#day-2-container > .temp > span');
const day2Date = document.querySelector('#day-2-container > .date');
const day2Description = document.querySelector(
  '#day-2-container > .description'
);

const day3Temp = document.querySelector('#day-3-container > .temp > span');
const day3Date = document.querySelector('#day-3-container > .date');
const day3Description = document.querySelector(
  '#day-3-container > .description'
);

export function displayWeatherData(locationData) {
  // result container
  resolveAddress.textContent = locationData.resolvedAddress;
  timeZone.textContent = locationData.timezone;
  description.textContent = locationData.description;

  // day 1 container
  day1Temp.textContent = locationData.days[0].temp;
  day1Date.textContent = locationData.days[0].datetime;
  day1Description.textContent = locationData.days[0].description;

  // day 2 container
  day2Temp.textContent = locationData.days[1].temp;
  day2Date.textContent = locationData.days[1].datetime;
  day2Description.textContent = locationData.days[1].description;

  // day 3 container
  day3Temp.textContent = locationData.days[2].temp;
  day3Date.textContent = locationData.days[2].datetime;
  day3Description.textContent = locationData.days[2].description;
}
