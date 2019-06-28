import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";
import Loading from "./helpers/loading";
import Icon from "react-native-vector-icons/Feather";
import { DrawerActions } from "react-navigation";
import GLOBALS from "../GlobalVars.js";
import styles from "../styles/GlobalStyles";

const website_step_id = GLOBALS.WEBSITE_STEP_ID;
const fetch = createApolloFetch({
  uri: GLOBALS.BASE_GRAPHQL_URL
});

class ProductList extends Component {
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

  prodClick = prodID => {};

  componentDidMount() {
    this.setState({ loading: true });
    fetch({
      query: `{ allProducts(limit: 50) { description, stockCode, catalogue, id, images(inHouse: false){
    	content  
    } }}`,
      variables: { website_step_id }
    })
      .then(res => {
        this.setState({ products: res.data.allProducts }, () => {
          this.setState({ loading: false });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;

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
          Products
        </Text>
        {this.state.loading ? (
          <Loading color={"#d02239"} />
        ) : (
          this.state.products.map((prod, index) => {
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
      </ScrollView>
    );
  }
}

export default ProductList;
