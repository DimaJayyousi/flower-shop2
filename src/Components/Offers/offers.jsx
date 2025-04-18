import React from 'react'
import Exclusive from '../Assetes/Snowy Lilies.jpg'
import './offers.css'
const offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS FLOWERS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={Exclusive} alt='' />
      </div>
    </div>
  )
}

export default offers
