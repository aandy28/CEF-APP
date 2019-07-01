// Header.js
import React from "react";
import withCart from "./cart/WithCart";
import { View, Text } from "react-native";

console.log(withCart);
class CartPreview extends React.Component {
  render() {
    const { cart } = this.props;
    let cartView =
      cart && cart.length == 0 ? (
        <View>
          <Text>Empty cart</Text>
        </View>
      ) : (
        <View>
          <Text>Items in cart: ({cart.length})</Text>
        </View>
      );
    return cartView;
  }
}
const CartPreviewWithCart = withCart(CartPreview);
export default CartPreviewWithCart;
