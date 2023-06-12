import classes from './CartItem.module.css';
import {Button} from 'react-bootstrap';

const CartItem = (props) => {
  // const price = `{props.price}₹`;
const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} />
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x 1{props.amount}</span>
        </div>
      </div>
      <div >
      <Button onClick={props.onRemove} variant="outline-warning">Remove</Button>{' '}
        
      </div>
    </li>
  );
};

export default CartItem;

