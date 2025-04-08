import React from 'react'
import './navbar.css'
import logo from '../Assetes/logo.png'
import cart from '../Assetes/cart.png'
function navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
     <img src={logo} alt=""/>
     <p>PEONY</p>
     </div>
     <ul className="nav-menu">
        <li><a>Home</a> </li>
        <li><a>About us</a> </li>
        <li><a>Flowers</a> </li>
        <li><a>Petal Talk</a> </li>
     </ul>
     <div className="nav-cart-login">
        <button>LogIn</button>
        <img src={cart} alt=""/>
        <div className="cart-counter">0</div>
     </div>
      </div>
  )
}

export default navbar
