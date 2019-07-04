import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import CartPreview from "./CartPreview";
import CartItem from "./CartItem";
import { AppConsumer } from "../../providers/AppProvider";
import Icon from "react-native-vector-icons/Feather";
import styles from "../../styles/GlobalStyles";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      previousCart: []
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Cart",
    headerRight: <CartPreview navigation={navigation} />,
    headerLeft: (
      <Icon
        name="menu"
        size={30}
        style={{ paddingLeft: 10 }}
        color="#000"
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
    )
  });
  componentDidMount() {
    this.getData();
  }

  clearPreviousCart() {
    AsyncStorage.removeItem("@cart");
    this.setState({ previousCart: [] });
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@cart");
      if (value !== null) {
        this.setState({ previousCart: JSON.parse(value) });
      }
    } catch (e) {}
  };

  render() {
    return (
      <AppConsumer>
        {({ cart, restorePreviousCart }) => {
          let cartInfo =
            cart && cart.length == 0 ? (
              <View>
                <Text
                  style={{
                    padding: 40,
                    fontSize: 30,
                    textAlign: "center",
                    color: "#334b56"
                  }}
                >
                  Your Cart Is Empty
                </Text>
              </View>
            ) : (
              <ScrollView style={styles.greyBg}>
                <Text
                  style={{
                    padding: 40,
                    fontSize: 30,
                    textAlign: "center",
                    color: "#334b56"
                  }}
                >
                  Cart
                </Text>

                <ScrollView>
                  {cart.map((line, index) => {
                    return <CartItem key={index} line={line} />;
                  })}
                </ScrollView>
              </ScrollView>
            );

          return (
            <ScrollView style={styles.greyBg}>
              {cartInfo}

              {this.state.previousCart !== undefined &&
                this.state.previousCart &&
                this.state.previousCart.length > 0 && (
                  <ScrollView style={styles.greyBg}>
                    <Text
                      style={{
                        padding: 40,
                        fontSize: 30,
                        textAlign: "center",
                        color: "#334b56"
                      }}
                    >
                      Previous Cart
                    </Text>
                    <View>
                      {this.state.previousCart.map((line, index) => {
                        return <CartItem key={index} line={line} />;
                      })}
                    </View>
                    <TouchableOpacity
                      style={{
                        borderWidth: 2,
                        borderColor: "#334b56",
                        backgroundColor: "transparent",
                        color: "#334b56",
                        height: 50,
                        margin: 10,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                      onPress={() => {
                        this.clearPreviousCart();
                        restorePreviousCart(this.state.previousCart);
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "700",
                          color: "#334b56",
                          fontSize: 18
                        }}
                      >
                        RESTORE PREVIOUS CART
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 2,
                        borderColor: "#334b56",
                        backgroundColor: "transparent",
                        color: "#334b56",
                        height: 50,
                        margin: 10,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                      onPress={() => {
                        this.clearPreviousCart();
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "700",
                          color: "#334b56",
                          fontSize: 18
                        }}
                      >
                        CLEAR PREVIOUS CART
                      </Text>
                    </TouchableOpacity>
                  </ScrollView>
                )}
            </ScrollView>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Cart;
