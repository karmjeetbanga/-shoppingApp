import React, { useContext } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

import { CartContext } from "../CartContext";

export function Product({ id, name, price, price_sign, currency, image_link }) {
  const { addItemToCart } = useContext(CartContext);

  function onAddToCart(id, name, price, price_sign, currency, image_link) {
    addItemToCart(id, name, price, price_sign, currency, image_link);
  }

  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.thumb} source={image_link} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>
          {currency} {price_sign} {price}
        </Text>
        <TouchableOpacity
          onPress={() =>
            onAddToCart({ id, name, price, price_sign, currency, image_link })
          }
          title="Add to cart"
        >
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
  },
  buttonText: {
    backgroundColor: "#54aeff",
    fontSize: 16,
    padding: 10,
    color: "white",
    borderRadius: 10,
    alignSelf: "center",
  },
});
