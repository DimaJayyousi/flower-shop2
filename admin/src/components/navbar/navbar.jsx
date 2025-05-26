import React from 'react'
import './navbar.css'
import Logo from '../assets/logo.png'
import navProfile from '../assets/profileicon.jpeg'
const navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="nav-pofile" />
    </div>
  )
}

export default navbar
