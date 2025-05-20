import React from 'react';
import './footer.css';
import logo from '../Assetes/logo.png';
import insta from '../Assetes/instagram.png';
import pain from '../Assetes/pinterest-logo.png';
import whats from '../Assetes/whatsapp.png';

const Footer = () => {
  // Message to be shared
  const shareMessage = encodeURIComponent("🌿✨ Step into the charm of Peony — where flowers bloom, vibes glow, and every petal tells a story. Discover your bouquet of joy at peony-shop.com 💐💞");

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt='logo' />
        <p>PEONY</p>
      </div>

      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        {/* Instagram */}
        <div className="footer-icons-container">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Share Peony on Instagram"
          >
            <img src={insta} alt='Instagram' />
          </a>
        </div>

        {/* Pinterest */}
        <div className="footer-icons-container">
          <img src={pain} alt='Pinterest' />
        </div>

        {/* WhatsApp */}
        <div className="footer-icons-container">
          <a 
            href={`https://wa.me/?text=${shareMessage}`} 
            target="_blank" 
            rel="noopener noreferrer"
            title="Share Peony on WhatsApp"
          >
            <img src={whats} alt='WhatsApp' />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025 - Adv Software Project 11</p>
      </div>
    </div>
  );
};

export default Footer;
