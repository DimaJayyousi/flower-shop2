import React from 'react'
import './addprodcut.css'
const addproduct = () => {
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type='text ' name='name' placeholder='enter the product title '/>
      </div>
    </div>
  )
}

export default addproduct
