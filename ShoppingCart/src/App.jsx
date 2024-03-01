import { createContext, useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import ViewCart from './Components/ViewCart'

export const AppContext = createContext()

function App() {
 const [cart,setCart]=useState([])
  return (
    <>
    <AppContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Cart" element={<ViewCart/>}/>
        </Routes>
        </div>
        
      </BrowserRouter>
    </AppContext.Provider>
   
    </>
  )
}

export default App
