import React, { useState, useContext } from "react";
import {Routes, Route, Navigate } from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import Header from './components/Layout/Header';

import AvailableProducts from "./components/Products/AvailableProducts"
import AvailableProducts2 from "./components/Products/AvailableProducts2";
import AvailableProducts3 from "./components/Products/AvailableProducts3";
import AvailableProducts4 from "./components/Products/AvailableProducts4";
import AvailableProducts5 from "./components/Products/AvailableProducts5";


import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";
import ProductDetails from "./components/Products/ProductDetails";
import LoginForm from "./components/Pages/LoginForm";
import AuthContext from "./store/auth-context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CartProvider from "./store/CardProvider";
import Footer from "./components/Pages/Footer";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx = useContext(AuthContext);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
    <CartProvider>
      
      
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />

          {!authCtx.isLoggedIn && <Route path="/login" element={<LoginForm />} />}

          <Route path="/product"
            element={authCtx.isLoggedIn ? (<AvailableProducts />) : 
          (<Navigate to="/login" replace />)}/>
        
        <Route path="/product/womensFasion"
            element={authCtx.isLoggedIn ? (<AvailableProducts2 />) : 
          (<Navigate to="/login" replace />)}/>
        
        <Route path="/product/kidsFashion"
            element={authCtx.isLoggedIn ? (<AvailableProducts3 />) : 
          (<Navigate to="/login" replace />)}/>
        
        <Route path="/product/footWear"
            element={authCtx.isLoggedIn ? (<AvailableProducts4 />) : 
          (<Navigate to="/login" replace />)}/>
        
        <Route path="/product/sweet"
            element={authCtx.isLoggedIn ? (<AvailableProducts5 />) : 
          (<Navigate to="/login" replace />)}/>
        
          <Route path="/product/:imageUrl" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
         
    </CartProvider>

    <Footer/>
    
    </>
  );
}

export default App;
