import React from 'react'
import './home.css'
import Login from '../Login/Login'
import Register from '../Register/Register'

export const Home = () => {
  const token = localStorage.getItem('token')
  return (
    token ? <div>Welcome to Home Page</div> :<Register/>  )
}
