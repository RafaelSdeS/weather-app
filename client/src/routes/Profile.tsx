import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editable from '../components/Editable'
import { AuthContext } from '../contexts/AuthContext'
import { ref as databaseRef, onValue, set } from 'firebase/database'
import { database } from '../firebase-config'
import { UserData } from '../types/userTypes'
import { storage } from '../firebase-config'
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import profile from '../assets/profile.svg'

function Profile() {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState<UserData | null>(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/error')
    } else {
      const userRef = databaseRef(database, 'users/' + user.uid)
      onValue(userRef, snapshot => {
        setUserData(snapshot.val() as UserData)
      })
    }
  }, [user, navigate])

  const handleUpdateLocation = (newLocation: string, index: number) => {
    if (userData) {
      const newLocations = [...userData.locations]
      newLocations[index] = newLocation
      setUserData({ ...userData, locations: newLocations })
    }
  }

  const handleUpdateLocations = async () => {
    if (userData && user) {
      set(databaseRef(database, 'users/' + user.uid), {
        ...userData,
        locations: userData.locations,
      })
        .then(() => {
          console.log('Locations updated successfully')
        })
        .catch(error => {
          console.error('Failed to update locations: ', error)
        })
    } else {
      console.error('Cannot update locations: userData or user is null')
    }
  }

  const handleImageClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = e => {
      const file = (e.target as HTMLInputElement)?.files?.[0]
      if (file && userData) {
        const imagesRef = storageRef(storage, `profilePictures/${file.name}`)
        const uploadTask = uploadBytesResumable(imagesRef, file)

        uploadTask.on(
          'state_changed',
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
              set(databaseRef(database, 'users/' + user.uid), {
                ...userData,
                profile_picture: downloadURL,
              })
                .then(() => {
                  setUserData({ ...userData, profile_picture: downloadURL })
                })
                .catch(error => {
                  console.error('Failed to update user data: ', error)
                })
            })
          },
          error => {
            console.error('Upload failed:', error)
          }
        )
      }
    }
    input.click()
  }
  return (
    <div className="bg-gray-100 row-span-2 col-span-4 flex flex-col text-center mr-4">
      {userData ? (
        <div>
          <div className="mx-auto my-2 p-3  rounded-xl">
            <h1 className="text-lg sm:text-2xl">{userData.email}</h1>
            <div>
              <img
                src={userData.profile_picture || profile}
                alt="Profile"
                className="my-5 h-20 w-20 mx-auto rounded-full cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
            <h1 className="text-lg sm:text-2xl">Locations:</h1>
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
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUpdateLocations}
            >
              Save Changes
            </button>{' '}
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}

export default Profile
