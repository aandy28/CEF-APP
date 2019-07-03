import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";
import { DrawerActions, withNavigation } from "react-navigation";

class DrawerHeader extends Component {
  goToRoute = route => {
    this.props.navigation.navigate(route);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    const { navigation, navigateToCallback } = this.props;
    return (
      <View style={styles.iosMarginTop}>
        <TouchableOpacity onPress={() => this.goToRoute("Home")}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 21,
              paddingBottom: 16,
              paddingLeft: 15,
              paddingRight: 10,
              alignItems: "center"
            }}
          >
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goToRoute("Cart")}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 21,
              paddingBottom: 16,
              paddingLeft: 15,
              paddingRight: 10
            }}
          >
            <Text>Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iosMarginTop: {
    marginTop: Platform.OS === "ios" ? 40 : 0
  }
});

export default withNavigation(DrawerHeader);
