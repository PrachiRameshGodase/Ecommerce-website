import React, { useState, useContext } from "react";
import {Routes, Route, Navigate } from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import Header from './components/Layout/Header';
import AvailableProducts from "./components/Products/AvailableProducts"
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";
import ProductDetails from "./components/Products/ProductDetails";
import LoginForm from "./components/Pages/LoginForm";
import AuthContext from "./store/auth-context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CartProvider from "./store/CardProvider";

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
        

          <Route path="/product/:imageUrl" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      
    </CartProvider>
  );
}

export default App;
