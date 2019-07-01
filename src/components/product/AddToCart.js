import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { AppConsumer } from "../../providers/AppProvider";

class AddToCart extends Component {
  addToCart = () => {
    console.log("added to cart");
  };
  render() {
    return (
      <AppConsumer>
        {({ cart, addItem }) => {
          return (
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "#334b56",
                backgroundColor: "transparent",
                color: "#334b56",
                height: 50,
                width: this.props.screenWidth - 60,

                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() => {
                addItem(this.props.item);
              }}
            >
              <Text
                style={{ fontWeight: "700", color: "#334b56", fontSize: 18 }}
              >
                ADD TO CART
              </Text>
            </TouchableOpacity>
          );
        }}
      </AppConsumer>
    );
  }
}

export default AddToCart;
