
import './App.css';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';

function App() {
  return (
    <>
    <Header/>
    <AvailableProducts/>
    </>
  );
}

export default App;
