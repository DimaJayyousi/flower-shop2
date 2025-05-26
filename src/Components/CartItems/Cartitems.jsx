import React, { useContext, useState } from 'react';
import './cartitems.css';
import { ShopContext } from '../../context/ShopContext';
import Remove from '../Assetes/bin.png';

const Cartitems = () => {
  const { all_product, cartItems, removefromCart } = useContext(ShopContext);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [message, setMessage] = useState('');

  // Total price calculation
  let totalPrice = 0;
  const hasItems = Object.values(cartItems).some((qty) => qty > 0);

  all_product.forEach((product) => {
    if (cartItems[product.id] > 0) {
      totalPrice += product.new_price * cartItems[product.id];
    }
  });

  // Checkout handler
  const handleCheckout = async () => {
    if (!hasItems) {
      setMessage("🛒 Oops! Your cart is empty. Fill it with some flower power 💐");
      return;
    }

    if (!deliveryTime) {
      alert("Please pick a delivery time first ⏰");
      return;
    }

    if (!paymentMethod) {
      alert("Choose a payment method before checkout 💳");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/createorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'mock-user-id-123', // Replace with actual user ID from auth
          cartItems: cartItems,
          deliveryTime: deliveryTime,
          paymentMethod: paymentMethod,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("🌸 Your bouquet is being wrapped with love! Delivery is scheduled and your order is on its way ✨");
        setShowTimeInput(false);
        setDeliveryTime('');
        setPaymentMethod('');
        setTimeout(() => setMessage(''), 7000);
      } else {
        setMessage("😓 Something went wrong! Try again later.");
      }
    } catch (err) {
      console.error(err);
      setMessage("🚨 Server error! Please check your internet or try again.");
    }
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

        {hasItems && !showTimeInput && (
          <button className="checkout-btn" onClick={() => setShowTimeInput(true)}>
            Proceed to Checkout
          </button>
        )}

        {showTimeInput && (
          <div className="checkout-scheduler">
            <label>Select delivery time 🕐:</label>
            <input
              type="datetime-local"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              className='delivery-input'
            />

            <div className="payment-method">
              <p>Choose a payment method 💳:</p>
              <label>
                <input
                  type="radio"
                  value="Credit Card"
                  checked={paymentMethod === 'Credit Card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  value="PayPal"
                  checked={paymentMethod === 'PayPal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                PayPal
              </label>
              <label>
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={paymentMethod === 'Cash on Delivery'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            <button className="confirm-checkout-btn" onClick={handleCheckout}>
              Confirm Order
            </button>
          </div>
        )}

        {message && <div className="checkout-message">{message}</div>}
      </div>
    </div>
  );
};

export default Cartitems;
