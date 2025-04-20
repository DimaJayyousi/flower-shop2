import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/home'
import Product from './Pages/product'
import Cart from './Pages/cart'
import Login from './Pages/login'
import Talk from './Pages/talk'
import Footer from './Components/Footer/footer'
import About from './Pages/About';
import ProductDetails from './Components/details/ProductDetails';
import ShopContextProvider from "./context/ShopContext";

function App() {
  return (
    <div>
      <ShopContextProvider><BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about"  element={<About/>}/>
      <Route path="/product" element={<Product />} /> 
      <Route path="/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/talk" element={<Talk />} />
    </Routes>
  </BrowserRouter>
   <Footer/>
   
   </ShopContextProvider>
     
    </div>
  );
}

export default App;
//   