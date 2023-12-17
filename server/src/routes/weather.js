const express = require('express')
const router = express.Router()
require('dotenv').config()
const { processWeatherData } = require('../utils/weatherUtils')

router.get('/:cityName', (req, res) => {
  const apiKey = process.env.API_KEY
  const { cityName } = req.params

  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=10`

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const responseData = processWeatherData(data)
      res.json(responseData)
    })
    .catch(error => {
      console.log('Error:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

module.exports = router
