import React, { useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider(props) {
  const [cartContext, setCartContext] = useState({
    items: [],
    totalAmount: 0,
  });

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = cartContext.items.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    // Get the existingCartItem object
    const existingCartItem = cartContext.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      // If existingCartItem exists in the array, update the amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...cartContext.items];
      // Update the item in the updatedItems array
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If an existing item is not found, add the new item to the array
      updatedItems = cartContext.items.concat({
        ...item,
        amount: 1,
      });
    }

    // Calculate the new total amount
    const updatedTotalAmount = cartContext.totalAmount + item.price;

    const updatedCartContext = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };

    setCartContext(updatedCartContext);
  };

  const removeItemFromCartHandler = (id) => {
    // Find the index of the item to be removed
    const itemIndex = cartContext.items.findIndex((item) => item.id === id);

    // Get the item object
    const item = cartContext.items[itemIndex];

    // Calculate the new total amount
    const newTotalAmount = cartContext.totalAmount - item.price * 1;

    let newItems;

    if (item.amount === 1) {
      // If the item has only 1 quantity, remove it from the array
      newItems = cartContext.items.filter((item) => item.id !== id);
    } else {
      // If the item has more than 1 quantity, update the amount
      const newItem = { ...item, amount: item.amount - 1 };
      newItems = [...cartContext.items];
      newItems[itemIndex] = newItem;
    }

    const updatedCartContext = {
      items: newItems,
      totalAmount: newTotalAmount,
    };

    setCartContext(updatedCartContext);
  };

  const clearCartHandler = () => {
    setCartContext({
      items: [],
      totalAmount: 0,
    });
  };

  const cartContextValue = {
    items: cartContext.items,
    totalAmount: cartContext.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
