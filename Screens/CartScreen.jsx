import React, { useEffect, useState, useContext } from "react";

import { View, Text, FlatList, StyleSheet } from "react-native";

import { CartContext } from "../CartContext";

export default function CartScreen() {
  const { cartItems, getItemsCount, getTotalPrice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>
      </View>
    );
  }

  function renderCartItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}
        </Text>
        <Text style={styles.lineRight}>
          {item.product.price_sign} {item.totalPrice}
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={cartItems}
      renderItem={renderCartItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
