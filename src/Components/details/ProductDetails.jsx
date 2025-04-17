import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Assetes/flower_products'; 
import './productdetails.css';
import { ShopContext } from '../../context/ShopContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = data.find((item) => item.id.toString() === productId);
  const {addToCart}=useContext(ShopContext);

  if (!product) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Flower not found 💐</h2>;
  }
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <div className="prices">
          <span className="new-price">${product.new_price}</span>
          <span className="old-price">${product.old_price}</span>
        </div>

        <button className="add-to-cart-btn" onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
