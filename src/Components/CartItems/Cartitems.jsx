import React, { useContext, useState, useEffect } from 'react';
import './cartitems.css';
import { ShopContext } from '../../context/ShopContext';
import Remove from '../Assetes/bin.png';

const Cartitems = () => {
  const { all_product, cartItems, removefromCart } = useContext(ShopContext);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);

  let totalPrice = 0;
  let isCartEmpty = true;

  all_product.forEach((product) => {
    if (cartItems[product.id] > 0) {
      totalPrice += product.new_price * cartItems[product.id];
      isCartEmpty = false;
    }
  });

  const handleCheckout = () => {
    if (isCartEmpty) {
      setCheckoutMessage('Please fill the cart 🛒');
    } else {
      setCheckoutMessage('Your order will be managed soon 😊');
    }
    setMessageVisible(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000);
  };

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="caritems-formate">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                <img
                  className='remove'
                  src={Remove}
                  alt="Remove item"
                  onClick={() => removefromCart(product.id)}
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="total-price">
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>

        {/* Show message only if it's visible */}
        {messageVisible && (
          <p className="checkout-message">{checkoutMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Cartitems;
