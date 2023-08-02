interface ForecastData {
  date: string;
  date_epoch: number;
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: {
      text: string,
      icon: string,
      code: number
    };
}

interface ForecastCardProps {
  forecast: ForecastData;
}

function ForecastCard({ forecast }: ForecastCardProps) {
  const { date, maxtemp_c, mintemp_c, condition } = forecast;

  return (
    <div className='bg-slate-400 flex flex-row justify-evenly py-2 my-2 mx-2 rounded-xl'>
      <h1>{date}</h1>
      <p>{mintemp_c}°C</p>
      <p>{maxtemp_c}°C</p>
      <p>{condition.text}</p>
      <img src={condition.icon} alt="" className='h-5 w-5' />
    </div>
  );
}

export default ForecastCard;