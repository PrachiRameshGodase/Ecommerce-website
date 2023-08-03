import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Button from "react-bootstrap/Button";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "react-bootstrap";
import axios from "axios";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const enteredEmail = localStorage.getItem("email");
  const updatedEmail = enteredEmail
    ? enteredEmail.replace("@", "").replace(".", "")
    : "";

  async function fetchCartItems() {
    const response = await axios.get(
      `https://crudcrud.com/api/6d4c4a821efe4ec597892ef03b5fb525/${updatedEmail}`
    );
    console.log(response.data);
    const cartItems = response.data.map((item) => {
      return {
        id: item._id,
        name: item.title,
        price: item.price,
        image: item.imageUrl,
        amount: item.amount,
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

  async function cartItemRemoveHandler(id) {
    console.log(id, updatedEmail);

    await axios.delete(
      `https://crudcrud.com/api/6d4c4a821efe4ec597892ef03b5fb525/${updatedEmail}/${id}`
    );
    toast.error("Item is deleted successfully!");
    // cartCtx.removeItem(id)
    fetchCartItems();
  }

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

  const OrderHandler = () => {
    setShowAlert(true);
  };

  return (
    <>
      <Modal onClose={props.onClose}>
        {cartItems.length > 0 ? (
          <ul className={classes["cart-items"]}>{cartItemList}</ul>
        ) : (
          <p className={classes["empty-text"]}>Your cart is empty.</p>
        )}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          {hasItems && (
            <Button variant="warning" onClick={props.onClose}>
              Close
            </Button>
          )}
          <Button variant="danger" onClick={OrderHandler}>
            Order
          </Button>{" "}
        </div>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Thanks for shopping with us!.
        </Alert>
      </Modal>
      <ToastContainer theme="colored" />
    </>
  );
}

export default Cart;
