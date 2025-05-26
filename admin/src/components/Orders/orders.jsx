import React, { useEffect, useState } from 'react';
import './Orders.css';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

  useEffect(() => {
  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost/getorders');
      setOrders(res.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  fetchOrders();
}, []);

    return (
        <div className="orders">
            <h2 className="orders-title">📦 Orders Dashboard</h2>

            {orders.length === 0 ? (
                <p className="no-orders">No orders yet. Let the petals bloom soon! 🌺</p>
            ) : (
                <div className="orders-list">
                    {orders.map((order, index) => (
                        <div className="order-card" key={index}>
                            <p><strong>Order #:</strong> {index + 1}</p>
                            <p><strong>User ID:</strong> {order.userId || 'Anonymous Bee 🐝'}</p>
                            <p><strong>Delivery Time:</strong> {new Date(order.deliveryTime).toLocaleString()}</p>
                            <p><strong>Items:</strong></p>
                            <ul>
                                {Object.entries(order.items).map(([id, quantity]) => (
                                    quantity > 0 ? <li key={id}>Product ID {id} × {quantity}</li> : null
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
