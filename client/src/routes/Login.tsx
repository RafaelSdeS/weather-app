import React, { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (!email || !password) {
        setError('Please provide email and password.')
        return
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const currentUser = userCredential.user
      setError('')
      console.log(currentUser)

      setEmail('')
      setPassword('')

      navigate('/')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Log in to Your Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-2"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
        {error && (
          <div className="text-red-500 text-sm text-center mt-4">{error}</div>
        )}
      </div>
    </div>
  )
}

export default Login
