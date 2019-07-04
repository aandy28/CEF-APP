import React from "react";
import { View, Text, Image } from "react-native";

const ProductItem = props => {
  const { imageBaseUrl, product } = props;

  let prodImage = product.images.length > 0 ? product.images[0].content : "";
  let prodStepId = product.images.length > 0 ? product.images[0].stepId : "";
  let curProdImage =
    product.images.length > 0
      ? imageBaseUrl + prodStepId + "/" + "medium_" + prodImage
      : "https://loremflickr.com/g/250/250/product";

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
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
            uri: curProdImage
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

        <Text style={{ marginBottom: 8, fontWeight: "700", color: "#334b56" }}>
          {product.description}
        </Text>
        <Text style={{ color: "#334b56" }}>
          <Text style={{ fontWeight: "700" }}>£8.64 </Text>
          For 1
        </Text>
        <Text style={{ color: "#334b56" }}>£10.37 inc VAT</Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15
        }}
      >
        <Text style={{ color: "#334b56" }}>
          Stock Code: {product.stockCode}
        </Text>
        <Text style={{ color: "#334b56" }}>Part Code: {product.catalogue}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
