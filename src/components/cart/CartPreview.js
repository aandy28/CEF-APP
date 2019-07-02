// Header.js
import React from "react";
import { AppConsumer } from "../../providers/AppProvider";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

class CartPreview extends React.Component {
  render() {
    let cartView = (
      <AppConsumer>
        {({ cart, addItem }) => {
          return cart && cart.length == 0 ? (
            <View>
              <Icon
                name="shopping-cart"
                size={30}
                style={{ paddingRight: 10 }}
                color="#000"
                onPress={() => this.props.navigation.navigate("Cart")}
              />
            </View>
          ) : (
            <View>
              <Icon
                name="shopping-cart"
                size={30}
                style={{ paddingRight: 10 }}
                color="#fff"
                onPress={() => this.props.navigation.navigate("Cart")}
              />
            </View>
          );
        }}
      </AppConsumer>
    );

    return cartView;
  }
}

export default CartPreview;
