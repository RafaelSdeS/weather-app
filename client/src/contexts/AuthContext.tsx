import React, { createContext, useState, useEffect, ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<any>(null)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    }
  }, [])

  const updateUser = (user: any) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
