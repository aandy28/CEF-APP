import React, { Component } from "react";
import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native";

import { DrawerActions } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import styles from "../styles/GlobalStyles";
import SearchBar from "./searchbar/";

class HomeScreen extends Component {
  onCartClick = () => {};
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Home",
    headerRight: (
      <Icon
        name="shopping-cart"
        size={30}
        style={{ paddingRight: 10 }}
        color="#000"
        onPress={({ props }) => this.onCartClick}
      />
    ),
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
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <SearchBar />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: 300,
            marginBottom: 40
          }}
          onPress={() => {
            navigate("PromoScreen", {
              promo: 1
            });
          }}
        >
          <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{
              uri:
                "https://04646a9cf351cc0d3888-b8b406d15fe93f790abb5bf0e9ab7ab3.ssl.cf3.rackcdn.com/images/promotions/production/normal/nest-online-deals-8cfd5b03d640dca15a97ea0e01d97c03.jpg?1560344920"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: 300,
            marginBottom: 40
          }}
          onPress={() => {
            navigate("ProductList");
          }}
        >
          <Text>All Products</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default HomeScreen;
