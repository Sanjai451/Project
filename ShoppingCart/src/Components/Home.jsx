import React, { useState } from 'react'
import data from '../assets/products.json'
import Products from './Products'
import './home.css'
import { useContext } from 'react';
import { AppContext } from '../App';


const Home = () => {
  const {cart,setCart}=useContext(AppContext)
  const [product]=useState(data)
  console.log(product)
  return (

      <div className='food-container'>
        {product.map((food)=>(
          <Products key={food.id} data={food}  />
          
          )
        )}
      </div>
  )
}

export default Home
