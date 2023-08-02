import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "react-bootstrap/Button";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <Button variant="danger" onClick={props.onClick} className={btnClasses}>
        <span className={classes.icon}>{/* <CartIcon/> */}</span>
        <span className={classes.title}>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </Button>{" "}
    </>
  );
};

export default HeaderCartButton;
