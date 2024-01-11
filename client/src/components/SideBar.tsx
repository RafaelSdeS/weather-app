import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth, database } from '../firebase-config'
import { ref, onValue } from 'firebase/database'
import { UserData } from '../types/userTypes'
import { AuthContext } from '../contexts/AuthContext'
import SideBarItem from './SideBarItem'
import { signOut } from 'firebase/auth'

function SideBar() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [cityName, setCityName] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState('')
  const [matchingCities, setMatchingCities] = useState<string[]>([])
  const [actualCity, setActualCity] = useState<string>('');

  useEffect(() => {
    if (user) {
      const userRef = ref(database, 'users/' + user.uid)
      onValue(userRef, snapshot => {
        setUserData(snapshot.val() as UserData)
      })
    }
  }, [user])

  useEffect(() => {
    const cityNames = [
      'Tokyo',
      'Delhi',
      'Shanghai',
      'Sao Paulo',
      'Mexico City',
      'Cairo',
      'Dhaka',
      'Mumbai',
      'Beijing',
      'Osaka',
      'Karachi',
      'Lagos',
      'Riyadh',
      'Istanbul',
      'Kolkata',
      'Jakarta',
      'Seoul',
      'Lima',
      'Baghdad',
      'Tehran',
      'Cuzco',
      'Kinshasa',
      'Guangzhou',
      'Harbin',
      'Yerevan',
      'Luanda',
      'Phnom Penh',
      'Bogota',
      'Surat',
      'Medellin',
      'Lahore',
      'Saint Petersburg',
      'Moscow',
      'Miami',
      'Buenos Aires',
      'Dongguan',
      'Atlanta',
      'Madrid',
      'Ho Chi Minh City',
      'Bengaluru',
      'Khartoum',
      'Haora',
      'Lusaka',
      'Peshawar',
      'Xiamen',
      'Chengdu',
      'Ahmedabad',
      'Nagoya',
      'Hyderabad',
      'Chennai',
      'Johannesburg',
      'Murcia',
      'Zhengzhou',
      'Quanzhou',
      'Nanning',
      'Budapest',
      'Singapore',
      'Kuala Lumpur',
      'Thessaloniki',
      'Cape Town',
      'Porto Alegre',
      'Salvador',
      'Chongqing',
      'Brazzaville',
      'Zhongshan',
      'Qingdao',
      'Multan',
      'Brisbane',
      'Monterrey',
      'Taipei',
      'Vancouver',
      'Kano',
      'Taiyuan',
      'Perth',
      'Kabul',
      'Peshawar',
      'Birmingham',
      'Hyderabad',
      'Dublin',
      'San Francisco',
      'Ottawa',
      'Milan',
      'Hanoi',
      'Doha',
      'Recife',
      'Montreal',
      'Durban',
      'Alexandria',
      'Naples',
      'Damascus',
      'Dushanbe',
      'Melbourne',
      'Belgrade',
      'Pune',
      'Isfahan',
      'Kathmandu',
      'Tunis',
      'Brisbane',
      'Kolkata',
      'Nanchang',
      'Portland',
      'Adelaide',
      'Vienna',
      'Boston',
      'Chittagong',
      'Shenzhen',
      'Gujranwala',
      'Lucknow',
      'Surabaya',
      'Guadalajara',
      'Mendoza',
      'Belo Horizonte',
      'Jabalpur',
      'Benguela',
      'Vilnius',
      'Marseille',
      'Hamburg',
      'Nassau',
      'Nagpur',
      'Prague',
      'Durban',
      'Kuwait City',
      'Antwerp',
      'Fortaleza',
      'Davao City',
      'Bandung',
      'Ouagadougou',
      'Bursa',
      'Manila',
      'Palermo',
      'Hiroshima',
      'Tiruchirappalli',
      'Curitiba',
      'Port Elizabeth',
      'Kampala',
      'Bandar Seri Begawan',
      'Genoa',
      'Riga',
      'Yangon',
      'Abuja',
      'Valencia',
      'Kathmandu',
      'Warsaw',
      'Oran',
      'Patna',
      'Medan',
      'Brussels',
      'Liverpool',
      'Taipei',
      'Kharkiv',
      'Sydney',
      'Izmir',
      'Kiev',
      'New Orleans',
      'Kuala Terengganu',
      'Rome',
      'Las Vegas',
      'Dubai',
      'Hanoi',
      'Varanasi',
      'Rio de Janeiro',
      'Taiwan',
      'Haerbin',
      'Baku',
      'Zhuhai',
      'Charlotte',
      'Kanpur',
      'Tashkent',
      'Budapest',
      'Vadodara',
      'Auckland',
      'Berlin',
      'Kiel',
      'Yerevan',
      'Pretoria',
      'Houston',
      'Amsterdam',
      'Manchester',
      'Leeds',
      'Edinburgh',
      'Belfast',
      'Dallas',
      'Rotterdam',
      'Athens',
      'Stuttgart',
      'Hamburg',
      'Helsinki',
      'Krakow',
      'Zurich',
      'Copenhagen',
      'Stockholm',
      'Singapore',
      'Vienna',
      'Geneva',
      'Zurich',
      'Kuala Lumpur',
      'Santiago',
      'Riyadh',
      'Bangkok',
      'Jakarta',
      'Dhaka',
      'Kathmandu',
      'Hanoi',
      'Istanbul',
      'Karachi',
      'Cairo',
      'Mexico City',
      'Beijing',
      'London',
      'Paris',
    ]
    if (searchTerm !== '') {
      const filtered = cityNames.filter(city => city.startsWith(searchTerm))
      setMatchingCities(filtered)
    } else {
      setMatchingCities([])
    }
  }, [searchTerm])

  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=40e5537684b9400c8f9dc850a379cd38&fields=city')
      const cityData = await response.json()
      setActualCity(cityData.city)
    }

    fetchCity()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/?cityName=${cityName}`)
  }

  const handleSearch = (input: string) => {
    setCityName(input)
    setSearchTerm(input)
  }

  const handleCityClick = (city: string) => {
    setCityName(city)
    setSearchTerm(city)
    setMatchingCities([])
  }

  const logout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Failed to log out: ', error)
    }
  }

  return (
    <div className="flex flex-col bg-gray-800 h-screen w-full sm:w-64 text-white p-4 rounded-md">
      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={cityName}
            onChange={e => handleSearch(e.target.value)}
            className="text-black px-2 py-1 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {matchingCities.length > 0 && (
            <div className="absolute z-10 w-1/4 mt-2 bg-white text-black rounded shadow overflow-auto max-h-60">
              {matchingCities.map((city, index) => (
                <div
                  key={index}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
      <div className="flex-grow space-y-4 sm:space-y-8">
        <ul>
          <Link
            to={`/?cityName=${actualCity}`}
            className="block hover:text-gray-200"
          >
            Actual location
          </Link>
          {userData?.locations.map((location, index) => (
            <SideBarItem location={location} key={index} />
          ))}
        </ul>
        <div className="flex justify-between items-center">
        <button
          onClick={logout}
          className="py-2 px-4 text-base bg-red-500 hover:bg-red-700 text-white font-bold rounded"
        >
          Logout
        </button>
      </div>
      </div>
    </div>
  )
}

export default SideBar
