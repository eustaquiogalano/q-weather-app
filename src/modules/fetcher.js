export async function fetchWeatherData(location) {
  try {
    // const location = prompt('Enter a city: ', 'manila');
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=7KG7V6LV3EKE4JDUQPBZ8EBLX&contentType=json`
    );
    const locationData = await response.json();
    return locationData;
  } catch (error) {
    console.log(new Error(error));
  }
}
