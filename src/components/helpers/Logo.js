import React from "react";
import { View, Image } from "react-native";
import logoPng from "../../images/cef_logo.png";
const Logo = () => {
  return (
    <View
      style={{
        flex: 1,
        width: undefined,
        height: undefined,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
      }}
    >
      <Image source={logoPng} resizeMode="contain" style={{ flex: 1 }} />
    </View>
  );
};

export default Logo;
