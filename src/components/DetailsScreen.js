import React, { Component } from "react";
import { View, ScrollView, Text, Image, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { DrawerActions } from "react-navigation";
import { withNavigation } from "react-navigation";

class DetailsScreen extends Component {
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
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const prod = navigation.getParam("prod", "NO-ID");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#F2F2F3",
            margin: 10,
            elevation: 4,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: "grey",
            shadowOpacity: 0.5,
            shadowRadius: 2
          }}
        >
          <View
            style={{
              height: 250,
              overflow: "hidden",
              marginBottom: 40,
              backgroundColor: "#babbbc"
            }}
          >
            <Image
              style={{ flex: 1 }}
              source={{
                uri: "https://loremflickr.com/g/320/240/product"
              }}
            />
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15
            }}
          >
            <View
              style={{
                height: 88,
                width: 88,
                padding: 2,
                marginTop: -100,
                borderWidth: 4,
                borderRadius: 44,
                borderColor: "#fff",
                backgroundColor: "#F2F2F3",
                overflow: "hidden"
              }}
            >
              <Image
                source={{
                  uri: "https://loremflickr.com/g/90/90/brand"
                }}
                style={{ flex: 1, height: undefined, width: undefined }}
                resizeMode="cover"
              />
            </View>

            <Text style={{ marginBottom: 8, fontWeight: "700" }}>
              {prod.description}
            </Text>
            <Text style={{ color: "#4a5568" }}>
              <Text style={{ fontWeight: "700" }}>£8.64 </Text>
              For 1
            </Text>
            <Text style={{ color: "#4a5568" }}>£10.37 inc VAT</Text>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15
            }}
          >
            <Text style={{ color: "#4a5568" }}>
              Stock Code: {prod.stock_code}
            </Text>
            <Text style={{ color: "#4a5568" }}>
              Part Code: {prod.catalogue}
            </Text>
          </View>
        </View>
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
export default withNavigation(DetailsScreen);
