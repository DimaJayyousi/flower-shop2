import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add from '../assets/add product.png';
import list from '../assets/product-range.png';
import orders from '../assets/orders.png'; // 🆕 Make sure you have this icon

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add} alt="add icon" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list} alt="list product icon" />
          <p>Product List</p>
        </div>
      </Link>

      {/* 🆕 Show Orders */}
      <Link to={'/orders'} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={orders} alt="orders icon" />
          <p>Show Orders</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
