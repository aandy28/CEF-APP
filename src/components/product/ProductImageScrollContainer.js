import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class ProductImageScrollContainer extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 10
        }}
      >
        <View
          style={{
            flex: 2,
            width: this.props.screenWidth - 40,
            height: this.props.screenHeight - 300
          }}
        >
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ddd"
            }}
            source={{
              uri: this.props.imageURI
            }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default ProductImageScrollContainer;
