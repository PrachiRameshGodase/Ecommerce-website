import {useState} from "react"
import './App.css';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./components/Cart/Cart"
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';

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
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
    <AvailableProducts/>
    </>
  );
}

export default App;
