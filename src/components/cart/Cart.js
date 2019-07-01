import React from "react";
import CartContext from "./CartContext";

import { View, Text, Button } from "react-native";
import { DrawerActions } from "react-navigation";

const products = [
  {
    id: 1,
    title: "Fortnite"
  },
  {
    id: 2,
    title: "Doom"
  },
  {
    id: 3,
    title: "Quake"
  }
];

const CartPage = () => (
  <CartContext.Consumer>
    {({ cart, addItem }) => (
      <React.Fragment>
        <View>
          <Text>Product list</Text>
          {products.map((p, index) => (
            <Button key={index} title={p.title} onPress={() => addItem(p)} />
          ))}
        </View>
        <View>
          <Text>Cart</Text>
          {cart.map(item => (
            <View key={item}>
              <Text>{item.title} </Text>
            </View>
          ))}
        </View>
      </React.Fragment>
    )}
  </CartContext.Consumer>
);
export default CartPage;
