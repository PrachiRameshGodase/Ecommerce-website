import React from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
import Button from 'react-bootstrap/Button';


function Cart(props) {
    const cartItems=<ul className={classes['cart-items']}>{[{
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
        .map((item)=>(
        <li>
            <div>
              <h3>{item.title}</h3>
                <img src={item.imageUrl} alt={item.title} />
                
                <p>${item.price}</p>
             
              <span>Quantity
                
              <Button variant="outline-primary">{item.quantity}</Button>{' '}
              <Button variant="warning">Remove</Button>{' '}
              </span>
              </div>
        </li>
    ))}</ul>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total </span>
        <span>$100</span>
      </div>
      
      <Button variant="warning" onClick={props.onClose}>Close</Button>{' '}
      <Button variant="primary">PURCHASE</Button>{' '}
    
    </Modal>
  )
}

export default Cart