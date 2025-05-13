import React, { createContext, useEffect, useState } from "react";
//import all_product from "../Components/Assetes/flower_products"

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
      cart[index] = 0;
    }
    return cart;
  };
  
const ShopContextProvider = (props) => {
    const [all_product,setAll_Product]=useState([]);
    useEffect(()=>{
     fetch ('http://localhost:3000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data))
    },[])
    const [cartItems,setCartItems] = useState(getDefaultCart());
     
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removefromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartItems=() =>{
        let totalItem =0;
        for(const item in cartItems)
        {
            if(cartItems[item] >0){
                totalItem +=cartItems[item]
            }
        }
        return totalItem;
    }
  const contextValue = { all_product ,cartItems ,addToCart,removefromCart ,getTotalCartItems};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
