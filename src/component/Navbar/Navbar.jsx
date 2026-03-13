import React, { use, useContext, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'
import { Link, Links, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { PiShoppingCart } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Navbar = () => {
  const cart = useSelector(state => state.cart.cart)
  const navigate = useNavigate();

  let navItem = ''

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyProfile = (nav) => {
    navItem = nav
    handleClose();
    if (!navItem) return;
    navigate(`/${nav}`);

  }
const handleLogout = ()=>{
  sessionStorage.removeItem('token');
  handleClose();
  navigate('/login')
}

  return (
    <div className='navbar-container'>
      <div className="navbar">
        <div className="icon">
          <Link to='/' className='d-flex align-items-center text-decoration-none text-black'> <img src={logo} alt="" />Ecommerce</Link>
        </div>
        <div className="search">
          <CiSearch style={{width:'35px'}}/> <input type="text" placeholder='Search for Products, Brands and More' />
        </div>
        <div className="d-flex align-items-center gap-3">
          <div><Link to='/' className='text-decoration-none text-black'>Home</Link></div>
          <div className='cart-block'><Link to='/cart' className='text-decoration-none text-black'>{cart.length > 0 ? <div className='cart-count'>{cart.length}</div> : ""}<BsCart3 />Cart </Link></div>
          {/* <li>About</li>
                <li>Contact</li> */}
          {/* <li><img src={user} alt="" className='user' />Account</li> */}
          {/* material ui componet  */}
          <div>
            {/* <img src={user} alt="" className='user' /> */}
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className='text-black'
            >
              <img src={user} alt="" className='user' />
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem onClick={() => handleMyProfile('profile')}>My Profile</MenuItem>
              <MenuItem onClick={() => handleMyProfile('address')}>Manage Address</MenuItem>
              <MenuItem onClick={handleClose}>Orders</MenuItem>
              {/* <MenuItem onClick={handleClose}>Wishlist</MenuItem> */}
              <MenuItem onClick={handleLogout}>LogOut</MenuItem>

            </Menu>
          </div>
        </div>

      </div>
    </div>
  )
}
