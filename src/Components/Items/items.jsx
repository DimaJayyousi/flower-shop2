// Items.jsx
import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Items = ({ id, image, name, new_price, old_price }) => {
  return (
    <Link to={`/${id}`} className="item-link">
      <div className='item'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <div className="item-prices">
          <div className="item-price-new">${new_price}</div>
          <div className="item-price-old">${old_price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Items;
