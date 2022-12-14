import React, { useContext } from "react";
import { Text, Image, View, StyleSheet, Button, Alert } from "react-native";

import { CartContext } from "../CartContext";

export function Product({ id, title, price, price_sign, image }) {
  const { addItemToCart } = useContext(CartContext);

  function onAddToCart(product) {
    addItemToCart(product);
    Alert.alert("Product added to cart");
  }

  return (
    <View style={styles.card}>
      <Image style={styles.thumb} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>
          ${price_sign} {parseFloat(price)}
        </Text>
        <Button
          style={styles.button}
          title="Add to cart"
          onPress={() => onAddToCart({ id, title, price, price_sign, image })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 5,
    padding: 10,
  },
  thumb: {
    height: 200,
    borderRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginVertical: 8,
    color: "#666",
  },
  button: {
    backgroundColor: "#841584",
    fontSize: 16,
    padding: 10,
    color: "white",
    borderRadius: 10,
    alignSelf: "center",
  },
});
