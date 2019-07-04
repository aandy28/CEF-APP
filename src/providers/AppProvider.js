import React, { Component } from "react";
import { config } from "../config";
import AsyncStorage from "@react-native-community/async-storage";

const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  state = {
    config,
    cart: [],
    addItem: item => {
      this.setState(
        {
          cart: [...this.state.cart, { ...item }]
        },
        () => {
          this.storeData(this.state.cart);
        }
      );
    },
    restorePreviousCart: previousCart => {
      this.setState({ cart: previousCart }, () => {
        this.clearData();
      });
    }
  };

  clearData = async () => {
    try {
      await AsyncStorage.removeItem("@cart");
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  storeData = async cart => {
    const cartAsString = JSON.stringify(cart);
    try {
      await AsyncStorage.setItem("@cart", cartAsString);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  render() {
    const { children } = this.props;
    const { state } = this;

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
  }
}
