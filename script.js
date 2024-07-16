function getWeather() {
  const apiKey = "653f9fa5679fefaaf2df49a97dae42b2";
  const city = document.getElementById('city').value;

  if (!city) {
    alert('Please enter a city');
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/
  weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/
  forecast?q=${city}&appid=${apiKey}`

  // DISPLAY WEATHER
  fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching current weather data', error);
      alert('Error fetching current weather data. Please try again.');
    });

  // DISPLAY HOURLY FORECAST
  fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
      displayHourlyForecast(data.list);
    })
    .catch(error => {
      console.error('Error fetching hourly forecast data:', error);
      alert('Error fetching hourly forecast data. Please try again.');
    });
};