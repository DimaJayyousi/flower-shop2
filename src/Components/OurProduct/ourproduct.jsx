import React from 'react'
import './ourproduct.css'
import flowers from '../Assetes/flower_products'
const ourproduct = () => {
  return (
    <div className='newcollection'>
    <h1>OUR PRODUCT</h1>
    <hr />
    <div className="collections">
      {flowers.map((item, i) => {
        return (
          <div key={i} className="item">
            <img src={item.image} alt={item.name} className="item-image" />
            <p>{item.name}</p>
            <div className="item-prices">
              <div className="item-price-new">
                ${item.new_price}  {/* Corrected here */}
              </div>
              <div className="item-price-old">
                ${item.old_price}  {/* Corrected here */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <div className="more">
    Explore More 
    </div>
  </div>
  )
}

export default ourproduct
