import {useEffect, useState} from 'react'
import ForecastCard from '../components/ForecastCard'

interface WeatherData {
  location:{
    name: string
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string,
      icon: string,
      code: number
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
  forecast: {
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
  }[];
}

function Home() {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);  

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api');
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchWeatherData();
  }, []);

  console.log(weatherData)


  return  (
    <div className='row-span-2 col-span-4 flex flex-col text-center mr-4'>
      {weatherData ? (
            <div>
              <div className='mx-auto my-2 p-3 rounded-xl'>
              <h1>{weatherData.location.name}</h1>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-slate-500 rounded-xl'>
                  <h1 className='py-5'>{weatherData.current.last_updated}</h1>
                  <div className='flex flex-col items-center'>
                    <img src={weatherData.current.condition.icon} alt="Tempo para hoje" className='pb-5 h-40' />
                    <div className='grid grid-cols-2 mt-5 items-start mx-auto'>
                    <p>{weatherData.current.condition.text}</p>
                    <p>Temperature {weatherData.current.temp_c}°C</p>
                    <p>Humidity: {weatherData.current.humidity}%</p>
                    <p>Wind: {weatherData.current.wind_kph}Kph</p>
                    <p>Precipitation: {weatherData.current.precip_mm}mm</p>
                    <p>Clouds: {weatherData.current.cloud}%</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-xl'>
                  {weatherData.forecast.map((forecast) => (
                  <ForecastCard key={forecast.date_epoch} forecast={forecast} />
                  ))}
                </div>
              </div>
            </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Home