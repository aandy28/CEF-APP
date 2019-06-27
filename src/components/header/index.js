import React, { Component } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import style from "../../styles/GlobalStyles";

class Header extends Component {
  render() {
    return (
      <View style={style.header}>
        <View>
          <TouchableOpacity onPress={this.onHamburgerClick}>
            <Icon
              name="menu"
              size={30}
              color="#000"
              onPress={() => this.onHamburgerClick}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require("../../images/cef_logo.png")} />
        </View>
        <View>
          <TouchableOpacity onPress={() => this.onCartClick}>
            <Icon
              name="shopping-cart"
              size={30}
              color="#000"
              onPress={() => this.onCartClick}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
