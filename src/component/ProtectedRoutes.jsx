import React from 'react'
import Register from '../pages/Register/Register'

export const ProtectedRoutes = ({children}) => {
    const token = sessionStorage.getItem('token')
  return (
    <div>
        {token ? children : <Register />}
    </div>
  )
}
