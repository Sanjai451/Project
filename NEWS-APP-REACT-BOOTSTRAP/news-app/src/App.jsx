import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'

function App() {
  
  const [category,setCategory] =  useState('general')
  return (
    <>
     <Navbar setCategory={setCategory} />
     <NewsContainer category={category} />
    </>
  )
}

export default App
