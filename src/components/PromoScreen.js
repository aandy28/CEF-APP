import React, { Component } from "react";
import { View, ScrollView, Text, Image, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { DrawerActions } from "react-navigation";

class PromoScreen extends Component {
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
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const promo = navigation.getParam("promo", "NO-ID");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is the promo for promotion {promo}</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default PromoScreen;
