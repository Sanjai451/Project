import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'

function App() {
 const [cart,setCart]=useState([])
 const [noprod,setnoprod]=useState(0)
  return (
    <>
    <BrowserRouter>
      <Header cart={cart}/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />}/>
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>
       </Routes>
       </div>
      
    </BrowserRouter>
    </>
  )
}

export default App
