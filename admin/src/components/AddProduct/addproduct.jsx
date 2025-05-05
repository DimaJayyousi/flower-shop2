import React, { useState } from 'react'
import './addprodcut.css'
import uploadarea from '../../components/assets/upload.png'
const addproduct = () => {

  const [image, setImage]= useState(false);
  const [productDetales,setproductdetales]=useState({
    name:"",
    image:"",
    newPrice : "",
    oldPrice :"",
    description : ""
  })
  const imageHandler =(e) =>{
    setImage(e.target.files[0]);
  }

  const changeHandler =(e) =>{
    setproductdetales({...productDetales,[e.target.name]:e.target.value})
  }

  const Add_Product = async ()=>{
    console.log(productDetales);
  }
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetales.name} onChange={changeHandler} type="text" name="name" placeholder="Enter the product title" />
      </div>

      <div className="product-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetales.oldPrice} onChange={changeHandler} type="text" name="oldPrice" placeholder="Type here" />
        </div>

        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetales.newPrice} onChange={changeHandler} type="text" name="newPrice" placeholder="Type here" />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Description</p>
        <input value={productDetales.description} onChange={changeHandler} type="text" name="description" placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor='file-input'>
          <img src={image?URL.createObjectURL(image):uploadarea} alt="" className='addprouduct-thumnail-img'/>
        </label>
        <input  onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
      </div>
      <button onClick={() => Add_Product()} className='addproduct-btn'> Add</button>
    </div>
  );
};
export default addproduct
