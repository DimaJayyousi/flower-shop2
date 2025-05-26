import React, { useState } from 'react';
import './news.css';

const News = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      alert('Please enter your email!');
      return;
    }
    // For now, just alert. Replace this with your email sending logic.
    alert(`Thank you for joining our garden of bloom! 🌷✨ We'll sprinkle some exclusive floral offers and sweet scents straight to your inbox soon. Stay blossoming. Email: ${email}`);
    setEmail('');
  };

  return (
    <div className='news'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input 
          type='email' 
          placeholder='Your Email address' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default News;
