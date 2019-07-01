import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
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
      query: `{ rootCategories { name, id, children{name} }}`,
      variables: { website_step_id }
    })
      .then(res => {
        console.log(res);
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
      <ScrollView style={styles.greyBg}>
        <View style={styles.containerHome}>
          <Text style={{ padding: 40, fontSize: 30, color: "#334b56" }}>
            Categories
          </Text>
          <View style={styles.twoCol}>
            {this.state.rootCategories.map((category, index) => {
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
                    this.onCatClick(category);
                  }}
                >
                  <Icon
                    name="battery-charging"
                    size={30}
                    style={{ marginBottom: 10, color: "#334b56" }}
                    onPress={({ props }) => this.onCartClick}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "#334b56"
                    }}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default CategoryList;
