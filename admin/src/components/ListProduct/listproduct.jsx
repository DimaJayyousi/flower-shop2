import React, { useEffect, useState } from 'react'
import './listproduct.css'
import crossicon from '../assets/bin.png'
const listproduct = () => {

  const [allproducts,setAllProdcut]=useState ([]);
 const fetchinfo =async()=>{
  await fetch('http://localhost:3000/allproducts').then((res)=>res.json()).then((data)=>{setAllProdcut(data)});
 }

 useEffect(()=>{
  fetchinfo();
 },[])


 const remove_product =async (id)=>{
   await fetch('http://localhost:3000/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'content-Type':'application/json',
    },
    body:JSON.stringify({id:id})
   })
    await fetchinfo();

 } 
 
  return (
    <div className='list-product '>
      <h1>All Product list </h1>
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title </p>
        <p>Old price </p>
        <p>New Price </p>
        <p>Discription </p>
        <p>Remove </p>
      </div>
      <div className="list-product-allproduct">
        <hr />
       {allproducts.map((product,index)=>{
        console.log(product.image);
        return <> <div key={index} className="list-product-format-amin listproduct-format">
       <img src={product.image}  alt="" className="listproduct-producticon" />
       <p>{product.name} </p>
       <p>${product.oldPrice} </p>
       <p>${product.newPrice} </p>
       <p>{product.description}</p>
       <img onClick={()=>{remove_product(product.id)}} src={crossicon} alt="" className="listproduct-removeicon" />
        </div>
        <hr />
        </>
       })}
       
      </div>
      
    </div>
  )
}

export default listproduct
