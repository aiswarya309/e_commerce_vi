import { useState } from 'react'
import './App.css'
import Register from './pages/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
// import Login from './pages/Login/Login'
import Login from './pages/Login/Login'
import { SingleProduct } from './component/SingleProduct/SingleProduct'
import { Cart } from './component/Cart/Cart'
import { MyAccount } from './component/MyAccount/MyAccount'
import { ProtectedRoutes } from './component/ProtectedRoutes'
import { AddressProvider } from './context/AddressProvider'
import { AddNewAddress } from './component/ManageAddress/AddNewAddress'
import { ManageAddress } from './component/ManageAddress/ManageAddress'
import { Layout } from './component/Layout/Layout'

function App() {
  return (
    <div className="App">
      <AddressProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<ProtectedRoutes><SingleProduct /></ProtectedRoutes>} />
              <Route path='/cart' element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
              <Route path='/myAccount' element={<ProtectedRoutes><MyAccount /></ProtectedRoutes>} />
              <Route path='/address' element={<ProtectedRoutes><ManageAddress /></ProtectedRoutes>} />
              </Route>
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AddressProvider>
    </div>
  )
}

export default App
