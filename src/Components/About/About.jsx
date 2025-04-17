// src/components/About.jsx

import React from 'react';
import './about.css';
import logo from '../Assetes/logo.png'; // Make sure your logo path is correct

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* Left side: Logo */}
        <div className="about-logo">
          <img src={logo} alt="Flower Shop Logo" />
        </div>

        {/* Right side: Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to our Flower Shop 🌸 — where petals meet passion. We’re not just selling flowers, we’re curating moments, memories, and little bundles of joy.
          </p>
          <p>
            From birthday blooms to surprise bouquets, everything we send out is hand-crafted, fresh, and full of love. Think of us as your go-to floral fairy godmothers 🧚‍♀️💐
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
