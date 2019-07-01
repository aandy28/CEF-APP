import React, { Component } from "react";
import { View, ScrollView, Text, Image, Dimensions } from "react-native";
import { DrawerActions } from "react-navigation";
import CartPreview from "../CartPreview";
import Icon from "react-native-vector-icons/Feather";
import styles from "../../styles/GlobalStyles";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: []
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Cart",
    headerRight: <CartPreview navigation={navigation}/>,
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

  // componentDidMount = async () => {
  //   try {
  //     this.setState({
  //       products: await this.getItems()
  //     });
  //   } catch (e) {
  //     console.log("error");
  //   }
  // };

  // getItems = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("@cart");
  //     if (value !== null) {
  //       // value previously stored
  //       console.log(value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //     console.log(e);
  //   }
  // };

  render() {
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
          Cart
        </Text>

        <View>
          <Text>Cart</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Cart;