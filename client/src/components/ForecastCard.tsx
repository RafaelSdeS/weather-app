import { ForecastData } from '../types/weatherTypes'

interface ForecastCardProps {
  forecast: ForecastData
}

function ForecastCard({ forecast }: ForecastCardProps) {
  const { date, maxtemp_c, mintemp_c, condition } = forecast

  return (
    <div className="bg-slate-400 flex flex-row justify-evenly py-2 my-2 mx-2 rounded-xl">
      <h1>{date}</h1>
      <p>{mintemp_c}°C</p>
      <p>{maxtemp_c}°C</p>
      <p>{condition.text}</p>
      <img src={condition.icon} alt="" className="h-5 w-5" />
    </div>
  )
}

export default ForecastCard
