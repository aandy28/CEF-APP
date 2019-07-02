import React, { Component } from "react";
import { View, ScrollView, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { DrawerActions, withNavigation } from "react-navigation";
import ProductImageScrollContainer from "./product/ProductImageScrollContainer";
import AddToCart from "./product/AddToCart";
import GLOBALS from "../GlobalVars.js";
import CartPreview from "./CartPreview";

const { height, width } = Dimensions.get("window");
class DetailsScreen extends Component {
  onCartClick = () => {};
  static navigationOptions = ({ navigation, screenProps }) => ({
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
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const prod = navigation.getParam("prod", "NO-ID");

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ebefeb"
        }}
      >
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <View style={{ marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {prod.images.map((image, index) => {
                  let imageUrl = image.content;
                  let imageStepID = image.stepId;
                  const curProdImage =
                    GLOBALS.IMAGE_BASE_URL +
                    imageStepID +
                    "/" +
                    "medium_" +
                    imageUrl;
                  return (
                    <ProductImageScrollContainer
                      key={index}
                      title={"product image 1"}
                      imageURI={curProdImage}
                      screenWidth={width}
                      screenHeight={height}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 30,
              paddingHorizontal: 20,
              marginTop: -50,
              backgroundColor: "#fff",
              marginLeft: 10,
              marginRight: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              elevation: 4,
              shadowOffset: { width: 2, height: 15 },
              shadowColor: "grey",
              shadowOpacity: 0.5,
              shadowRadius: 15,
              color: "#334b56",
              flex: 1,
              alignItems: "center"
            }}
          >
            {/* <View
              style={{
                height: 88,
                width: 88,
                padding: 2,

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
            </View> */}
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "#334b56",
                marginBottom: 20,
                textAlign: "center"
              }}
            >
              {prod.description}
            </Text>

            <Text style={{ color: "#334b56", fontSize: 22 }}>
              <Text style={{ fontWeight: "700" }}>£8.64 </Text>
              For 1
            </Text>
            <Text style={{ color: "#334b56", fontSize: 20 }}>
              £10.37 inc VAT
            </Text>
            <View
              style={{
                marginVertical: 10,
                flex: 1,
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#334b56" }}>
                Stock Code: {prod.stock_code}
              </Text>
              <Text style={{ color: "#334b56" }}>
                Part Code: {prod.catalogue}
              </Text>
            </View>
            <View>
              <AddToCart screenWidth={width} item={prod} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default withNavigation(DetailsScreen);
