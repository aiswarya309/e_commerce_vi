import React from 'react'
import './home.css'
import Register from '../Register/Register'
import { Navbar } from '../../component/Navbar/Navbar'
import { Listing } from '../../component/listing/listing'
import { Footer } from '../../component/Footer/Footer'
import { useState } from 'react'

export const Home = () => {
  // const token = localStorage.getItem('token')
    const token = sessionStorage.getItem('token')

  return (
    // token ? <div><Pages /></div> : <Register />)
        token ? <div><Listing /></div> : <Register />)

}

const Pages = () => {
  const [check,setChack] = useState(false)
  return <>
    <div className="container">
      <Navbar />
      <Listing />
      <Footer/>
    </div>
  </>
}