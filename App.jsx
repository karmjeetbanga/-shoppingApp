import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import { CartProvider } from "./CartContext.js";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Products"
            component={ProductScreen}
            options={{
              tabBarLabel: "ProductList",
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="list-alt" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="CartScreen"
            component={CartScreen}
            options={{
              tabBarLabel: "Cart",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
