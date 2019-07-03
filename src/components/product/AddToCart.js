import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { AppConsumer } from "../../providers/AppProvider";

class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "1"
    };
  }

  reduceQuantity = () => {
    let value = parseInt(this.state.value);

    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }
    value = value.toString();
    this.setState({ value: value });
  };
  increaseQuantity = () => {
    let value = parseInt(this.state.value);

    if (value < 100) {
      value = value + 1;
    } else {
      value = 0;
    }

    value = value.toString();
    this.setState({ value: value });
  };
  render() {
    return (
      <AppConsumer>
        {({ cart, addItem }) => {
          return (
            <View>
              <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
                <TouchableOpacity
                  style={{
                    color: "#334b56",
                    height: 50,
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#E1E8EE",
                    borderRadius: 6
                  }}
                  onPress={() => {
                    this.reduceQuantity();
                  }}
                >
                  <Icon name="minus" size={30} color="#000" />
                </TouchableOpacity>
                <TextInput
                  style={{
                    height: 50,
                    flex: 1,
                    textAlign: "center"
                  }}
                  onChangeText={value => this.setState({ value })}
                  value={this.state.value}
                />
                <TouchableOpacity
                  style={{
                    color: "#334b56",
                    height: 50,
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#E1E8EE",
                    borderRadius: 6
                  }}
                  onPress={() => {
                    this.increaseQuantity();
                  }}
                >
                  <Icon name="plus" size={30} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
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
                    addItem({
                      item: this.props.item,
                      quantity: this.state.value
                    });
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      color: "#334b56",
                      fontSize: 18
                    }}
                  >
                    ADD TO CART
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </AppConsumer>
    );
  }
}

export default AddToCart;
