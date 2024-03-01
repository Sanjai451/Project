import React, { useDebugValue, useEffect, useState } from 'react'
import './Cart.css'
//this is a shoping app by yuva
const Cart = ({cart,setCart}) => {
  const [total,setTotal] =useState(0)
  useEffect(()=>{
   setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])
  return (
    <>
    <h1>Cart Products</h1>
    <div className="cart-container">
      {
        cart.map((food)=>( 
          <div className="cart-product" key={food.id}>
          <div className="img">
            <img src={food.pic} alt="image" />
          </div>
          <div className="cart-product-details" key={food.id}>
            <h2>{food.name}</h2>
            <p>Price Rs.{food.amt}</p>
          </div>
        </div>
        
        ))
      }
      <div className="footer">
        <h2>Total amount : {total}</h2>
      </div>
    </div>
    
    </>
  )
}

export default Cart

 {/* <div className="cart-product">
        <div className="img">
          <img src="https://placehold.co/100x100" alt="" />
        </div>
        <div className="cart-product-details">
          <h2>Product name</h2>
          <p>Price Rs.45</p>
        </div>
      </div>
      <div className="cart-product">
        <div className="img">
          <img src="https://placehold.co/100x100" alt="" />
        </div>
        <div className="cart-product-details">
          <h2>Product name</h2>
          <p>Price Rs.45</p>
        </div>
      </div>
      <div className="cart-product">
        <div className="img">
          <img src="https://placehold.co/100x100" alt="" />
        </div>
        <div className="cart-product-details">
          <h2>Product name</h2>
          <p>Price Rs.45</p>
        </div>
      </div> */}
