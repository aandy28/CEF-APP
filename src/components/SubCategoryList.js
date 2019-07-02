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

class SubCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: []
    };
  }

  onCatClick = cat => {
    this.props.navigation.navigate("CategoryProductList", {
      name: cat.name,
      id: cat.id
    });
  };

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
    const { children } = this.props.navigation.state.params.cat;

    return (
      <ScrollView style={styles.greyBg}>
        <View style={styles.containerHome}>
          <Text
            style={{
              padding: 40,
              fontSize: 30,
              textAlign: "center",
              color: "#334b56"
            }}
          >
            {this.props.navigation.state.params.cat.name} Subcategories
          </Text>
          {children.length > 0 ? (
            <View style={styles.twoCol}>
              {children.map((subCat, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      height: 200,
                      aspectRatio: 1,
                      flexBasis: 140,
                      margin: 10,
                      backgroundColor: "#fff",
                      flex: 1,
                      padding: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                      elevation: 4,
                      shadowOffset: { width: 2, height: 15 },
                      shadowColor: "#ddd",
                      shadowOpacity: 0.5,
                      shadowRadius: 15
                    }}
                    activeOpacity={0.5}
                    onPress={() => {
                      this.onCatClick(subCat);
                    }}
                  >
                    <Icon
                      name="battery-charging"
                      size={30}
                      style={{ marginBottom: 10, color: "#334b56" }}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "#334b56"
                      }}
                    >
                      {subCat.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <Text>No Subcategories Found.</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default SubCategoryList;
