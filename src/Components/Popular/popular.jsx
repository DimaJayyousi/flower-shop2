import React from 'react';
import './popular.css';
import popular_data from '../Assetes/flower_products_copy'; // fixed the path typo
import Items from '../Items/Items'

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN OUR SHOP</h1>
      <hr/>
      <div className="popular_items">
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
    </div>
  );
};

export default Popular;