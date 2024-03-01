import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({cart}) => {
  return (
    <div className='head'>
      <div className="logo" >HungryShop</div>
      <ul className='unorder'>
        <li>
            <Link to={"/"}> Home</Link>
        </li>
        <li>
            <Link to={"/Cart"}> View Cart<span>{cart.length == 0?"" : "-"+cart.length}</span> </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
