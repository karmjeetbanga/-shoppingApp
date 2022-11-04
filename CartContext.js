import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(product) {
    setCartItems((prevItems) => {
      let cartItem = cartItems.find((item) => item.id === product.id);
      console.log("cartItem", cartItem);

      if (cartItem) {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            item.qty++;
            item.totalPrice = item.qty * product.price;
          }

          return item;
        });
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            product,
            qty: 1,
            totalPrice: parseFloat(product.price),
          },
        ];
      }
    });
  }

  function getItemsCount() {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return cartItems.reduce(
      (sum, item) => sum + parseFloat(item.totalPrice),
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
