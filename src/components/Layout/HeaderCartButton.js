import React from 'react'
import Button from 'react-bootstrap/Button';
import classes from "./HeaderCartButton.module.css"
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton=(props)=>{
  return (
    <>
      <Button variant="outline-primary" onClick={props.onClick}>
        <span className={classes.icon}>
            {/* <CartIcon/> */}
        </span>
        <span className={classes.title}>Cart</span>
        <span className={classes.badge}>0</span>
      </Button>{" "}
    </>
  )
}

export default HeaderCartButton
