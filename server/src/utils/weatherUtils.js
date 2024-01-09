function processWeatherData(data) {
  const {
    location: { name },
    current: {
      temp_c,
      condition,
      wind_kph,
      precip_mm,
      humidity,
      cloud,
      feelslike_c,
      last_updated,
    },
    forecast: { forecastday },
  } = data

  const locationData = { name }

  const currentWeatherData = {
    temp_c,
    condition,
    wind_kph,
    precip_mm,
    humidity,
    cloud,
    feelslike_c,
    last_updated,
  }

  const forecastData = forecastday.map(day => {
    const {
      date,
      day: {
        maxtemp_c,
        mintemp_c,
        maxwind_kph,
        totalprecip_mm,
        avghumidity,
        daily_chance_of_rain,
        condition,
      },
    } = day

    return {
      date,
      maxtemp_c,
      mintemp_c,
      maxwind_kph,
      totalprecip_mm,
      avghumidity,
      daily_chance_of_rain,
      condition,
    }
  })

  return {
    location: locationData,
    current: currentWeatherData,
    forecast: forecastData,
  }
}

module.exports = { processWeatherData }
