import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function SideBar() {
  const navigate = useNavigate()
  const [cityName, setCityName] = useState<string>('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/?cityName=${cityName}`)
  }

  return (
    <div className="flex flex-col bg-gray-800 h-[75vh] text-white col-span-1 rounded-md max-w-max">
      <div className="h-20 bg-gray-900 flex items-center justify-around flex-col">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={cityName}
            onChange={e => setCityName(e.target.value)}
            className="text-black px-2 py-1 border w-[85%] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </form>
      </div>
      <div className="flex-grow p-4 items-center text-lg">
        <ul className="space-y-2 flex justify-around flex-col h-full">
          <li className="py-2">
            <Link
              to="/?cityName=Actual%20location"
              className="block hover:text-gray-200"
            >
              Actual location
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/?cityName=Localização%201"
              className="block hover:text-gray-200"
            >
              Localização 1
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/?cityName=Localização%202"
              className="block hover:text-gray-200"
            >
              Localização 2
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/?cityName=Localização%203"
              className="block hover:text-gray-200"
            >
              Localização 3
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/?cityName=Localização%204"
              className="block hover:text-gray-200"
            >
              Localização 4
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
