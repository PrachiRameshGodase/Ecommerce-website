import React, { useContext, useEffect, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import Button from 'react-bootstrap/Button';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import axios from 'axios';

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  const enteredEmail = localStorage.getItem('email');
  const updatedEmail = enteredEmail ? enteredEmail.replace('@', '').replace('.', '') : '';

  
  
  async function  fetchCartItems() {
    const response = await axios.get(`https://crudcrud.com/api/c3d5487e3a6048789a803633209dfc27/${updatedEmail}`);
    console.log(response.data)
    const cartItems = response.data.map((item) => {
      return {
        id: item._id,
        name: item.title,
        price: item.price,
        image: item.imageUrl,
        amount:item.amount,
    };
      
    });
    setCartItems(cartItems);
    console.log(cartItems);
  } 

  useEffect(() => {   
  fetchCartItems();
 }, []);


//totalAmount is calculated depend upon cartItems
const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const hasItems = cartItems.length > 0;

  
async function cartItemRemoveHandler(id){
  console.log(id,updatedEmail)
  
  await axios.delete(`https://crudcrud.com/api/c3d5487e3a6048789a803633209dfc27/${updatedEmail}/${id}`)
  // cartCtx.removeItem(id)
  fetchCartItems();
  };
  

  

  const cartItemList = cartItems.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      image={item.image}
      onRemove={() => cartItemRemoveHandler(item.id)}
      
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      {cartItems.length > 0 ? (
        <ul className={classes['cart-items']}>{cartItemList}</ul>
      ) : (
        <p className={classes['empty-text']}>Your cart is empty.</p>
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <div>
        {hasItems && (
          <Button variant="warning" onClick={props.onClose}>
            Close
          </Button>
        )}
        <Button variant="primary">PURCHASE</Button>{' '}
      </div>
    </Modal>
  );
}

export default Cart;

