import React, { Component } from "react";
import { View, Image } from "react-native";

class ProductImageScrollContainer extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 20
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
              resizeMode: "cover",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ddd"
            }}
            source={{
              uri: this.props.imageURI
            }}
          />
        </View>
      </View>
    );
  }
}

export default ProductImageScrollContainer;
