import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { database } from '../firebase-config'
import { ref, onValue } from 'firebase/database'
import { UserData } from '../types/userTypes'
import { AuthContext } from '../contexts/AuthContext'
import SideBarItem from './SideBarItem'

function SideBar() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [cityName, setCityName] = useState<string>('')

  useEffect(() => {
    if (user) {
      const userRef = ref(database, 'users/' + user.uid)
      onValue(userRef, snapshot => {
        setUserData(snapshot.val() as UserData)
      })
    }
  }, [user])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/?cityName=${cityName}`)
  }

  return (
    <div className="flex flex-col bg-gray-800 h-screen w-64 text-white p-4 rounded-md">
      <div className="mb-8">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={cityName}
            onChange={e => setCityName(e.target.value)}
            className="text-black px-2 py-1 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </form>
      </div>
      <div className="flex-grow space-y-4">
        <ul>
          <li>
            <Link
              to="/?cityName=Actual%20location"
              className="block hover:text-gray-200"
            >
              Actual location
            </Link>
            {userData?.locations.map((location, index) => (
              <SideBarItem location={location} key={index} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
