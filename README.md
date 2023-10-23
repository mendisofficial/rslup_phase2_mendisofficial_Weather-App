# Node.js Weather App

A simple Node.js application to fetch weather information for a given city from the OpenWeatherMap API.

## Getting Started

These instructions will help you set up and run the Node.js Weather App on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- npm (Node Package Manager)

### Installing

1. Clone the repository or download the project to your local machine.

   ```bash
   git clone https://github.com/mendisofficial/rslup_phase2_mendisofficial_Weather-App.git
   ```

2. Navigate to the project directory.

   ```bash
   cd weather-app
   ```

3. Install the required dependencies using npm.

   ```bash
   npm install
   ```

### Usage

1. To use the weather app, run the following command:

   ```bash
   node weather.js
   ```

2. You will be prompted to enter a city. Provide the name of the city you want to get weather information for.

3. The app will make a request to the OpenWeatherMap API and display the weather data in the terminal.


### Example

Here's an example of the output when you run the app:
```
Enter a city: New York
City: New York
Temperature: 15°C
Humidity: 65%
Wind Speed: 6.78km/h
Weather: Partly cloudy
```


### API Key

This app uses the OpenWeatherMap API to fetch weather data. To get your API key, sign up at [OpenWeatherMap](https://openweathermap.org) and replace the `apiKey` in the `weather.js` file with your own API key.


## Built With

This project was built using the following technologies:

- [Node.js](https://nodejs.org/) - The JavaScript runtime for the server
- [node-fetch](https://www.npmjs.com/package/node-fetch) - For making HTTP requests
- [readline](https://nodejs.org/api/readline.html) - For reading user input from the terminal
