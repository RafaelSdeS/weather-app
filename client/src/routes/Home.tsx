import { useContext, useEffect, useState } from 'react'
import ForecastCard from '../components/ForecastCard'
import { useLocation } from 'react-router-dom'
import { WeatherData } from '../types/weatherTypes'
import { AuthContext } from '../contexts/AuthContext'

function Home() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const cityName = queryParams.get('cityName') || 'Washington'
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (user) {
          const token = await user.getIdToken()
          const response = await fetch(
            `http://localhost:5000/api/weather/${cityName}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          const data: WeatherData = await response.json()
          setWeatherData(data)
        } else {
          console.log('Error: User not logged in') // Handle the case when the user is not logged in
        }
      } catch (error) {
        console.log('Error:', error)
      }
    }

    fetchWeatherData()
  }, [cityName, user])

  return (
    <div className="row-span-2 col-span-4 flex flex-col text-center mr-4">
      {weatherData ? (
        <div>
          <div className="mx-auto my-2 p-3 rounded-xl">
            <h1>{weatherData.location.name}</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-500 rounded-xl">
              <h1 className="py-5">{weatherData.current.last_updated}</h1>
              <div className="flex flex-col items-center">
                <img
                  src={weatherData.current.condition.icon}
                  alt="Tempo para hoje"
                  className="pb-5 h-40"
                />
                <div className="grid grid-cols-2 mt-5 items-start mx-auto">
                  <p>{weatherData.current.condition.text}</p>
                  <p>Temperature {weatherData.current.temp_c}°C</p>
                  <p>Humidity: {weatherData.current.humidity}%</p>
                  <p>Wind: {weatherData.current.wind_kph}Kph</p>
                  <p>Precipitation: {weatherData.current.precip_mm}mm</p>
                  <p>Clouds: {weatherData.current.cloud}%</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl">
              {weatherData.forecast.map(forecast => (
                <ForecastCard key={forecast.date_epoch} forecast={forecast} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data... </p>
      )}
    </div>
  )
}

export default Home
