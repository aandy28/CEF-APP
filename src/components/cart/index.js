import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { DrawerActions } from "react-navigation";
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
      products: []
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

  render() {
    return (
      <AppConsumer>
        {({ cart, addItem }) => {
          return cart && cart.length == 0 ? (
            <View>
              <Text>Your Cart Is Empty</Text>
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
                {cart.map((item, index) => {
                  return <CartItem key={index} item={item} />;
                })}
              </ScrollView>
            </ScrollView>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Cart;
