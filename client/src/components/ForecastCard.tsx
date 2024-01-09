import { ForecastData } from '../types/weatherTypes'

interface ForecastCardProps {
  forecast: ForecastData
}

function ForecastCard({ forecast }: ForecastCardProps) {
  const {
    date,
    maxtemp_c,
    mintemp_c,
    condition,
    maxwind_kph,
    totalprecip_mm,
    avghumidity,
    daily_chance_of_rain,
  } = forecast

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <img src={condition.icon} alt="" className="h-10 w-10 mx-auto" />
        <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">
          {new Date(date).getDate() +
            '/' +
            (new Date(date).getMonth() + 1) +
            '/' +
            new Date(date).getFullYear()}{' '}
        </h3>
        <dl className="mt-5 grid grid-cols-3 gap-5">
          <div>
            <dt className="text-sm font-medium text-gray-500">Max Temp</dt>
            <dd className="text-sm text-gray-900">{maxtemp_c}°C</dd>
            <dt className="text-sm font-medium text-gray-500">Min Temp</dt>
            <dd className="text-sm text-gray-900">{mintemp_c}°C</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Humidity</dt>
            <dd className="text-sm text-gray-900">{avghumidity} %</dd>
            <dt className="text-sm font-medium text-gray-500">Wind Speed</dt>
            <dd className="text-sm text-gray-900">{maxwind_kph} Kph</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Precipitation</dt>
            <dd className="text-sm text-gray-900">{totalprecip_mm} mm</dd>
            <dt className="text-sm font-medium text-gray-500">Rain</dt>
            <dd className="text-sm text-gray-900">{daily_chance_of_rain} %</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ForecastCard
