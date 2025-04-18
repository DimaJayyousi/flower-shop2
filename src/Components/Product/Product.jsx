// src/Pages/product.jsx
import React from 'react';
import Items from '../Items/Items'; // 👈 match the exact path & case
import popular_data from '../Assetes/flower_products'; // 👈 your flower data
import './product.css'
const Product = () => {
  return (
    <div className="newcollection">
      <h1>Our Flower</h1>
      <hr/>
      <div className="collections">
        {popular_data.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
        
      </div>
      <div className="more">
    Explore More 
    </div>
  </div>
    
  );
};

export default Product;
