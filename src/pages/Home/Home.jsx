import React from 'react'
import './home.css'
import Register from '../Register/Register'
import { Navbar } from '../../component/Navbar/Navbar'
import { Listing } from '../../component/listing/listing'
import { Footer } from '../../component/Footer/Footer'

export const Home = () => {
  const token = localStorage.getItem('token')
  return (
    token ? <div><Pages /></div> : <Register />)
}

const Pages = () => {
  return <>
    <div className="container">
      <Navbar />
      <Listing />
      <Footer/>
    </div>
  </>
}