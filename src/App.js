import {useState,useContext} from "react"
import './App.css';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import Cart from "./components/Cart/Cart"
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';
import CartProvider from './store/CardProvider';
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";
import ProductDetails from "./components/Products/ProductDetails";
import LoginForm from "./components/Pages/LoginForm";
import AuthContext from "./store/auth-context";

function App() {
  // const Navigate=useNavigate()
  const [cartIsShown, setCartIsShown]=useState(false);
  const authCtx=useContext(AuthContext);

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
      
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact_us" element={< ContactUs/>} />
      {/* <Route path="/login" element={< LoginForm/>} />
      <Route path="/product" element={<AvailableProducts/>} /> */}
      {authCtx.isLoggedIn ?  <Route path="/product" element={<AvailableProducts />} /> : <Route path="/product" element={<LoginForm />} />}

      (<Route path="/login" element={<LoginForm />} />) 
      <Route path="/product/:imageUrl" element={<ProductDetails/>}/>
      <Route path="/" element={<Home/>} />
        </Routes>
       
        
    </CartProvider>
    </Router>
    </>
  );
}

export default App;
