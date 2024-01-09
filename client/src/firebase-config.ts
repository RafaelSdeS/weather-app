import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'weather-app-9209e.firebaseapp.com',
  projectId: 'weather-app-9209e',
  storageBucket: 'weather-app-9209e.appspot.com',
  messagingSenderId: '1096386858064',
  appId: '1:1096386858064:web:a9f57238126afbe1661555',
  databaseURL: 'https://weather-app-9209e-default-rtdb.firebaseio.com/',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const database = getDatabase(app)
