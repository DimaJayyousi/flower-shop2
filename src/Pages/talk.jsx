// src/pages/Talk.jsx

import React from 'react';
import flowers from '../Components/Assetes/flower_products'; // Import flower data from the flowers.js file
import FlowerCard from '../Components/flowercard/FlowerCard'; // Import FlowerCard component
import './CSS/talk.css'

const Talk = () => {
  return (
    <section className="talk-page">
      <h2>🌸 Flower Language</h2>
      <p>Each flower has its own meaning! Explore their symbolism below:</p>

      <div className="flower-grid">
        {/* Loop through the flowers array and render a FlowerCard for each flower */}
        {flowers.map((flower, index) => (
          <FlowerCard
            key={index} 
            name={flower.name}
            image={flower.image}
            meaning={flower.meaning}
          />
        ))}
      </div>
    </section>
  );
};

export default Talk;
