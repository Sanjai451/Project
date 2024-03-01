import React, { useState } from 'react'
import data from '../assets/products.json'
import Products from './Products'
import './home.css'
const Home = ({cart,setCart}) => {
  const [product]=useState(data)
  console.log(product)
  return (

      <div className='food-container'>
        {product.map((food)=>(
          <Products key={food.id} data={food}
           cart={cart} setCart={setCart}
          />
          
          )
        )}
      </div>
  )
}

export default Home
