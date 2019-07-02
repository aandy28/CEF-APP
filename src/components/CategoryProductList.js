import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";
import Loading from "./helpers/loading";
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
      products: [],
      parentName: ""
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

  componentDidMount() {
    this.setState({ loading: true });
    const parentID = this.props.navigation.state.params.id;
    fetch({
      query: `{ category(id: "${parentID}") 
        { name
          products {
            description, stockCode, catalogue, id, 
            images(inHouse: false){
              stepId
              content  
            }
          } 
        }
      }`
    })
      .then(res => {
        this.setState(
          {
            products: res.data.category.products,
            parentName: res.data.category.name
          },
          () => {
            this.setState({ loading: false });
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { products, loading } = this.state;
    return (
      <ScrollView style={styles.greyBg}>
        <Text
          style={{
            padding: 40,
            fontSize: 30,
            textAlign: "center",
            color: "#334b56"
          }}
        >
          Products for {this.state.parentName}
        </Text>

        <View>
          {loading ? (
            <Loading color={"#d02239"} />
          ) : (
            products.map((prod, index) => {
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
                  <ProductItem
                    imageBaseUrl={GLOBALS.IMAGE_BASE_URL}
                    product={prod}
                  />
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
    );
  }
}

export default CategoryProductList;
