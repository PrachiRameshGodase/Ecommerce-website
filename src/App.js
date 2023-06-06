import {useState} from "react"
import './App.css';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart/Cart"
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';
import CartProvider from './store/CardProvider';
import About from "./components/Pages/About";

function App() {

  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <>
    <Router >
    <CartProvider>
       
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Routes>
      
      <Route path="/" element={< AvailableProducts/>} />
      <Route path="/products" element={<About />} />
        </Routes>
       
        
    </CartProvider>
    </Router>
    </>
  );
}

export default App;
