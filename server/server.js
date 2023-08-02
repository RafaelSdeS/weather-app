require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  
  const apiKey = process.env.API_KEY; 
  
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=10`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
  const {
    location: {
      name
    },
    current: {
      temp_c,
      condition,
      wind_kph,
      precip_mm,
      humidity,
      cloud,
      feelslike_c,
      last_updated
    },
    forecast: { forecastday }
  } = data;

  const locationData = {
    name
  }

  const currentWeatherData = {
    temp_c,
    condition,
    wind_kph,
    precip_mm,
    humidity,
    cloud,
    feelslike_c,
    last_updated
  };

  const forecastData = forecastday.map(day => {
    const {
      date,
      day: {
        maxtemp_c,
        mintemp_c,
        condition
      }
    } = day;
  
    return {
      date,
      maxtemp_c,
      mintemp_c,
      condition
    };
  });

  const responseData = {
    location: locationData,
    current: currentWeatherData,
    forecast: forecastData
  };

  res.json(responseData);
  
})
.catch(error => {
  console.log('Error:', error);
  res.status(500).json({ error: 'Internal Server Error' });
});
})

app.listen(5000, () => {
  console.log(`Server is a go on port 5000!`);
});