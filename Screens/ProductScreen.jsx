import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { Product } from "../components/Product.js";

export default function ProductScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [AddToCart, setAddToCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderProduct = ({ item }) => <Product {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
