import React from 'react'
import './Admin.css'
import Siderbar from '../../components/Sidebar/Siderbar'
import {Routes,Route} from 'react-router-dom'
import AddProduct from  '../../components/AddProduct/addproduct'
import ListProduct from '../../components/ListProduct/listproduct'
const Admin = () => {
  return (
    <div className='Admin'>
      <Siderbar/>
      <Routes>
       <Route  path='/addproduct' element={AddProduct}  />
       <Route  path='/listproduct' element={ListProduct}  />
        </Routes>
    </div>
    
  )
}

export default Admin
