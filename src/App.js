
import './App.css';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./components/Cart/Cart"
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';

function App() {
  return (
    <>
    <Cart/>
    <Header/>
    <AvailableProducts/>
    </>
  );
}

export default App;
