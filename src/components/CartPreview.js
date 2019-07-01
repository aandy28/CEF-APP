// Header.js
import React from "react";
import { AppConsumer } from "../providers/AppProvider";
import { View, Text } from "react-native";
class CartPreview extends React.Component {
  render() {
    let cartView = (
      <AppConsumer>
        {({ cart, addItem }) => {
          return cart && cart.length == 0 ? (
            <View>
              <Text>Empty cart</Text>
            </View>
          ) : (
            <View>
              <Text>Items in cart: ({cart.length})</Text>
            </View>
          );
        }}
      </AppConsumer>
    );

    return cartView;
  }
}

export default CartPreview;
