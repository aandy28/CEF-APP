import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { AppConsumer } from "../providers/AppProvider";
import ProductItem from "./ProductItem";
import Loading from "./helpers/loading";
import CartPreview from "./CartPreview";
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
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Home",
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

  componentDidMount() {
    this.setState({ loading: true });
    fetch({
      query: `{ allProducts(limit: 50) { description, stockCode, catalogue, id, images(inHouse: false){
        stepId
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
    const { products, loading } = this.state;
    return (
      <AppConsumer>
        {({ config }) => {
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
            </ScrollView>
          );
        }}
      </AppConsumer>
    );
  }
}

export default ProductList;
