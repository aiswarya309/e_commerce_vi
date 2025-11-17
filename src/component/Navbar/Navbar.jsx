import React, { use } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { PiShoppingCart } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Navbar = () => {
  const cart = useSelector(state => state.cart.cart)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar'>
      <div className="icon">
        <span><Link to='/'> <img src={logo} alt="" /></Link>Ecommerce</span>

      </div>
      <div className="search">
        <CiSearch /> <input type="text" placeholder='Search for Products, Brands and More' />
      </div>
      <div className="options">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li className='cart-block'><Link to='/cart'>{cart.length > 0 ? <div className='cart-count'>{cart.length}</div> : ""}<BsCart3 />Cart </Link></li>
          {/* <li>About</li>
                <li>Contact</li> */}
          {/* <li><img src={user} alt="" className='user' />Account</li> */}
          {/* material ui componet  */}
          <li>
            <div>
              {/* <img src={user} alt="" className='user' /> */}
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
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
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose}>Orders</MenuItem>
                <MenuItem onClick={handleClose}>Wishlist</MenuItem>
                <MenuItem onClick={handleClose}>LogOut</MenuItem>

              </Menu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
