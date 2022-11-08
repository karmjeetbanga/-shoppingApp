import React, { useEffect, useState, useContext } from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { CartContext } from "../CartContext";
import { AntDesign } from "@expo/vector-icons";

export default function CartScreen() {
  const { cartItems, getItemsCount, getTotalPrice, removeItemFromCart } =
    useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartView}>
        <View style={styles.cartLineTotal}>
          <Text style={styles.subtotal}>Subtotal </Text>
          <Text style={styles.subtotal}>${total}</Text>
        </View>

        <View>
          <Text style={styles.cartText}>
            Shipping and taxes calculated at checkout.
          </Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text>checkout </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderCartItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={{ uri: item.product.image }} />
        </View>
        <View style={styles.infoView}>
          <View style={styles.lineTop}>
            <Text style={styles.lineLeftTop}>{item.product.title}</Text>
            <Text style={styles.lineRightTop}>${item.product.price}</Text>
          </View>

          <View style={styles.lineBottom}>
            <Text style={styles.qty}>Qty: {item.qty}</Text>
            <AntDesign
              name="delete"
              style={styles.remove}
              size={20}
              color="gray"
              onPress={() => {
                removeItemFromCart(item.id);
              }}
            />
          </View>
        </View>
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
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    marginVertical: 2.5,
    padding: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  imageView: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  infoView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  lineTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lineBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  lineLeftTop: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  lineRightTop: {
    fontSize: 16,
    width: "30%",
    textAlign: "right",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  qty: {
    fontSize: 16,
    color: "#333333",
  },
  remove: {
    fontSize: 16,
  },
  cartView: {
    marginVertical: 2.5,
    padding: 10,
  },
  cartLineTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  checkoutButton: {
    backgroundColor: "#f0c14b",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  cartText: {
    fontSize: 12,
    color: "#a9a9a10",
    textAlign: "left",
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
