import { useContext, useEffect, useState } from 'react'
import Editable from '../components/Editable'
import { AuthContext } from '../contexts/AuthContext'
import { ref, onValue, set } from 'firebase/database'
import { database } from '../firebase-config'
import { UserData } from '../types/userTypes'

function Profile() {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (user) {
      const userRef = ref(database, 'users/' + user.uid)
      onValue(userRef, snapshot => {
        setUserData(snapshot.val() as UserData)
      })
    }
  }, [user])

  const handleUpdateLocation = (newLocation: string, index: number) => {
    if (userData) {
      const newLocations = [...userData.locations]
      newLocations[index] = newLocation
      setUserData({ ...userData, locations: newLocations })
    }
  }

  const handleUpdateLocations = async () => {
    if (userData && user) {
      set(ref(database, 'users/' + user.uid), {
        ...userData,
        locations: userData.locations,
      })
        .then(() => {
          console.log('Locations updated successfully')
        })
        .catch(error => {
          console.error('Failed to update locations: ', error)
        })
    }
  }

  return (
    <div className="bg-gray-100 row-span-2 col-span-4 flex flex-col text-center mr-4">
      {userData ? (
        <div>
          <div className="mx-auto my-2 p-3 rounded-xl">
            <h1>{userData.email}</h1>
            <img
              src={userData.profile_picture}
              alt="Profile"
              className="pb-5 h-40"
            />
            <p>Locations:</p>
            {userData.locations.map((location, index) => (
              <div key={index}>
                <Editable
                  text={location}
                  onChange={newLocation =>
                    handleUpdateLocation(newLocation, index)
                  }
                />
              </div>
            ))}
            <button onClick={handleUpdateLocations}>Save Changes</button>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}

export default Profile
