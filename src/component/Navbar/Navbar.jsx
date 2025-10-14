import React, { use } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="icon">
          <span> <img src={logo} alt="" />Ecommerce</span>
           
        </div>
        <div className="options">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About</li>
                <li>Contact</li>
                <li><img src={user} alt="" className='user' /></li>
            </ul>
        </div>
    </div>
  )
}
