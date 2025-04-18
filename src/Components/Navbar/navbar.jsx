import React, { useContext } from 'react';
import './navbar.css';
import logo from '../Assetes/logo.png';
import cart from '../Assetes/bag.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);
 
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>PEONY</p>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/product">Flowers</Link></li>
        <li><Link to="/talk">Petal Talk</Link></li>
      </ul>
      <div className="nav-cart-login">
        <Link to='/login'><button>LogIn</button></Link> 
        <Link to='/cart'><img src={cart} alt="" /></Link> 
        <div className="cart-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
