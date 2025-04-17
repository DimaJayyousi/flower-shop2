// src/components/Trust.jsx

import React from 'react';
import './Trust.css'; // New CSS file for this section

const Trust = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-card green">
          <h4>🚚 On-Time Delivery</h4>
          <p>We ship fast and track every bouquet until it’s in your hands.</p>
        </div>
        <div className="trust-card yellow">
          <h4>✅ 100% Reliable</h4>
          <p>Trusted by thousands of happy customers (and their moms).</p>
        </div>
        <div className="trust-card pink">
          <h4>💐 Fresh Guarantee</h4>
          <p>Our flowers are fresher than your playlist. Seriously.</p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
