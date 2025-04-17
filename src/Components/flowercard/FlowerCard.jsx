// src/components/FlowerCard.jsx

import React from 'react';
import './FlowerCard.css'; // Add custom styles for each flower card

const FlowerCard = ({ name, image, meaning }) => {
  return (
    <div className="flower-card">
      <img src={image} alt={name} className="flower-img" />
      <h3>{name}</h3>
      <p>{meaning}</p>
    </div>
  );
};

export default FlowerCard;
