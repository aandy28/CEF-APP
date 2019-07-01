import React from "react";
import CartPage from "./Cart";
import CartContext from "./CartContext";
import Icon from "react-native-vector-icons/Feather";
import { DrawerActions } from "react-navigation";
import CartPreview from "../CartPreview";
class CartProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      addItem: item => {
        this.setState({
          cart: [...this.state.cart, { ...item }]
        });
      }
    };
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Cart",
    headerRight: <CartPreview value={this.state} />,
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
  // // static navigationOptions = ({ navigation, screenProps }) => ({
  // //   headerRight: (
  // //     <Icon
  // //       name="shopping-cart"
  // //       size={30}
  // //       style={{ paddingRight: 10 }}
  // //       color="#000"
  // //       onPress={({ props }) => this.onCartClick}
  // //     />
  // //   ),
  // //   headerLeft: (
  // //     <Icon
  // //       name="menu"
  // //       size={30}
  // //       style={{ paddingLeft: 10 }}
  // //       color="#000"
  // //       onPress={() => {
  // //         navigation.dispatch(DrawerActions.openDrawer());
  // //       }}
  // //     />
  // //   )
  // });
  render() {
    return (
      <CartContext.Provider value={this.state}>
        <CartPage />
      </CartContext.Provider>
    );
  }
}
export default CartProvider;
