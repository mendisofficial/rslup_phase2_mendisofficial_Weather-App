import fetch from 'node-fetch';
import { createInterface } from 'readline';

const apiKey = "50b56474f621b4387afe974ef514c11a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      console.error("City not found.");
    } else {
      let data = await response.json();

      console.log("City: " + data.name);
      console.log("Temperature: " + Math.round(data.main.temp) + "°C");
      console.log("Humidity: " + data.main.humidity + "%");
      console.log("Wind Speed: " + data.wind.speed + "km/h");
      console.log("Weather: " + data.weather[0].description);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

rl.question("Enter a city: ", (city) => {
  checkWeather(city);
  rl.close();
});
