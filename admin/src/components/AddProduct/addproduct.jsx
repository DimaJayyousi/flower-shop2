import React from 'react'
import './addprodcut.css'
const addproduct = () => {
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type='text ' name='name' placeholder='enter the product title '/>
      <div className="product-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" name="old_price" placeholder='type here'/>
        </div>

        <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" name="new_price" placeholder='type here'/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <input   name="description" placeholder="type here " />
      </div>
      </div>
    </div>
  )
}

export default addproduct
