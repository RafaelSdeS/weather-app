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
          const response = await fetch(`http://localhost:5000/${cityName}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          const data: WeatherData = await response.json()
          setWeatherData(data)
        } else {
          console.log('User not logged in')
        }
      } catch (error) {
        console.log('Error:', error)
      }
    }
    if (user) {
      fetchWeatherData()
    }
  }, [cityName, user])

  return (
    <div className="row-span-2 col-span-4 flex flex-col text-center mr-4">
      {weatherData ? (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
          <main className="flex flex-col items-center justify-center space-y-4">
            <div className="relative group w-1/2 mt-12 flex justify-center">
              <h1 className="text-4xl font-bold text-gray-900">
                {weatherData.location.name}
              </h1>
              <p className="absolute top-full left-0 right-0 text-xs text-gray-500 mt-2">
                Updated at{' '}
                {new Date(weatherData.current.last_updated).getDate() +
                  '/' +
                  (new Date(weatherData.current.last_updated).getMonth() + 1) +
                  '/' +
                  new Date(weatherData.current.last_updated).getFullYear()}{' '}
                {new Date(weatherData.current.last_updated).getHours()} :
                {new Date(weatherData.current.last_updated).getMinutes()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {weatherData.forecast.slice(0, 3).map((forecast, index) => (
                <ForecastCard
                  key={`${forecast.date_epoch}-${index}`}
                  forecast={forecast}
                />
              ))}
            </div>
          </main>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Home
