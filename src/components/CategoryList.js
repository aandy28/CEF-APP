import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";
import Icon from "react-native-vector-icons/Feather";
import { DrawerActions } from "react-navigation";
import styles from "../styles/GlobalStyles";
import GLOBALS from "../GlobalVars.js";

const website_step_id = GLOBALS.WEBSITE_STEP_ID;
const fetch = createApolloFetch({
  uri: GLOBALS.BASE_GRAPHQL_URL
});

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rootCategories: []
    };
  }

  onCartClick = () => {};
  static navigationOptions = ({ navigation, screenProps }) => ({
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

  componentDidMount() {
    fetch({
      query: `{ rootCategories { name, id }}`,
      variables: { website_step_id }
    })
      .then(res => {
        this.setState({ rootCategories: res.data.rootCategories });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onCatClick = cat => {
    fetch({
      query: `{ category(id: "${cat.id}") 
        { name
          products {
            description
          } 
        }
      }`
    })
      .then(res => {
        this.props.navigation.navigate("CategoryProductList", {
          products: res.data.category.products,
          id: res.data.category.name
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ padding: 40, fontSize: 30, textAlign: "center" }}>
          Categories
        </Text>

        {this.state.rootCategories.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => {
                this.onCatClick(category);
              }}
            >
              <Text style={styles.screenTextStyle}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

export default CategoryList;
