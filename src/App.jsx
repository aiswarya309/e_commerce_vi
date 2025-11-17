import { useState } from 'react'
import './App.css'
import Register from './pages/Register/Register'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
    // import Login from './pages/Login/Login'
import Login from './pages/Login/login'
import { SingleProduct } from './component/SingleProduct/SingleProduct'
import { Cart } from './component/Cart/Cart'
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
          {/* <Route path="/home" element={<Home />} /> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
