import React from 'react'
import './navbar.css'
import logo from '../Assetes/logo.png'
import cart from '../Assetes/bag.png'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
     <img src={logo} alt=""/>
     <p>PEONY</p>
     </div>
     <ul className="nav-menu">
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about_us">About us</Link></li>  {/* For About us (non-router link) */}
     <li><Link to="/product">Flowers</Link></li>
     <li><Link to="/talk">Petal Talk</Link></li>
     </ul>
     <div className="nav-cart-login">
       <Link to='/login'><button>LogIn</button></Link> 
       <Link to='/cart'><img src={cart} alt=""/></Link> 
        <div className="cart-counter">0</div>
     </div>
      </div>
  )
}

export default navbar
