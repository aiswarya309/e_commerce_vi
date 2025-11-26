import React from 'react'
import Register from '../pages/Register/Register'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {
    const token = sessionStorage.getItem('token')
  return (
    <div>
        {token ? children : <Navigate to='/register' />}
    </div>
  )
}
