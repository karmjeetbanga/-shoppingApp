import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id, name, price, price_sign, currency, image_link) {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) {
        return [
          ...prevItems,
          {
            id: id,
            qty: 1,
            product: {
              id: id,
              name: name,
              price: price,
              price_sign: price_sign,
              currency: currency,
              image_link: image_link,
            },
            totalPrice: price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += price;
          }
          return item;
        });
      }
    });
  }

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
