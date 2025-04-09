import React from 'react'
import './footer.css'
import logo from '../Assetes/logo.png'
import insta from '../Assetes/instagram.png'
import pain from '../Assetes/pinterest-logo.png'
import whats from '../Assetes/whatsapp.png'
const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt=''/>
        <p>PEONY</p>
      </div>
      <ul className='footer-links'>
        <li>Cpmpany</li>
        <li>products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">

        <div className="footer-icons-container">
            <img src={insta} alt=''/>
        </div>
        
        <div className="footer-icons-container">
            <img src={pain} alt=''/>
        </div>

        <div className="footer-icons-container">
            <img src={whats} alt=''/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2025 - Adv Software Project 11</p>
      </div>
    </div>
  )
}

export default footer
