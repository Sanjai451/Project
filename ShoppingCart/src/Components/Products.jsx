import React, { useState } from 'react'
import './products.css'
import { useContext } from 'react';
import { AppContext } from '../App';



const Products = ({data}) => {
    const {cart,setCart} = useContext(AppContext)
    const name=data.name.length>20 ? data.name.substring(0,20)+"..d." : data.name;
    const addcart=()=>{
            setCart([...cart,data])
    }
    const removecart=()=>{
        setCart(cart.filter((c)=>c.id !== data.id))
    }
    return (
        <div className='products-detail'>
            <div className="img">
                 <img src={data.pic} alt="food" />
            </div>
             <div className="details">
                <h2>{name}</h2>
                <p>Price Rs.{data.amt}</p>
                {
                    cart.includes(data)? <button onClick={removecart} className='removecartbtn'>Remove from cart</button>
                    :<button onClick={addcart} className='addcartbtn'>Add to cart</button>
                }
             </div>


        </div>
    )
}

export default Products
