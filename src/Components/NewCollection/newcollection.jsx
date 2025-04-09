import React from 'react'
import './newcollection.css'
import new_collection from '../Assetes/new_collection'

const newcollection = () => {
    return (
      <div className='newcollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {new_collection.map((item, i) => {
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
      </div>
    );
  }
export default newcollection
