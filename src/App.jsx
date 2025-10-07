import { useState } from 'react'
import './App.css'
import Register from './pages/Register/Register'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
