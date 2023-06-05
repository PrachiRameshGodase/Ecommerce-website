import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from 'react-bootstrap/Button';
import classes from "./HeaderCartButton.module.css"


const HeaderCartButton=(props)=>{
    const cartCtx=useContext(CartContext);
    const numberOfCartItems=cartCtx.items.reduce((currNumber,item)=>{
    return currNumber+item.amount;
  },0);
  return (
    <>
      <Button variant="outline-primary" onClick={props.onClick}>
        <span className={classes.icon}>
            {/* <CartIcon/> */}
        </span>
        <span className={classes.title}>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </Button>{" "}
    </>
  )
}

export default HeaderCartButton
