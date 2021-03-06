import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import GLOBALS from "../../GlobalVars.js";

class CartItem extends Component {
  render() {
    const { line } = this.props;
    let imageUrl = line.item.images[0].content;
    let imageStepID = line.item.images[0].stepId;
    const prodImage =
      GLOBALS.IMAGE_BASE_URL + imageStepID + "/" + "medium_" + imageUrl;

    return (
      <View
        style={{
          backgroundColor: "#ffffff",
          margin: 10,
          borderTopColor: "#eee",
          borderTopWidth: 1,
          padding: 16,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            height: 140,
            width: 110
          }}
        >
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
              borderWidth: 1,
              borderColor: "#ddd"
            }}
            source={{
              uri: prodImage
            }}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              marginBottom: 10
            }}
          >
            <Text
              style={{
                color: "#2d2d2d",
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              £10.99
            </Text>
            <Text
              style={{
                color: "#334b56",
                fontWeight: "700",
                marginLeft: 10
              }}
            >
              Qty: {line.quantity}
            </Text>
          </View>
          <Text style={{ marginBottom: 10 }}>{line.item.description}</Text>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{ color: "#334b56", marginRight: 5, fontWeight: "700" }}
            >
              SC: {line.item.stockCode}
            </Text>
            <Text
              style={{ color: "#334b56", marginRight: 5, fontWeight: "700" }}
            >
              PC: {line.item.catalogue}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CartItem;
