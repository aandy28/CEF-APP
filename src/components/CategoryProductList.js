import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";
import Icon from "react-native-vector-icons/Feather";
import { DrawerActions, withNavigationFocus } from "react-navigation";
import styles from "../styles/GlobalStyles";
import GLOBALS from "../GlobalVars.js";

const website_step_id = GLOBALS.WEBSITE_STEP_ID;
const fetch = createApolloFetch({
  uri: GLOBALS.BASE_GRAPHQL_URL
});

class CategoryProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: []
    };
  }

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
        <Text style={{ padding: 40, fontSize: 30, textAlign: "center" }}>
          Products for {this.props.navigation.state.params.id}
        </Text>
        {this.props.navigation.state.params.products.length > 0 ? (
          <View>
            {this.props.navigation.state.params.products.map((prod, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.5}
                  onPress={() => {
                    navigate("DetailsScreen", {
                      prod: prod
                    });
                  }}
                >
                  <ProductItem product={prod} />
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <Text>No Products Found.</Text>
        )}
      </ScrollView>
    );
  }
}

export default CategoryProductList;
