import React, { Component } from "react";
import { View, TextInput, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import * as Animate from "react-native-animatable";

class Searchbar extends Component {
  state = {
    searchBarFocused: false
  };
  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View
          style={{
            height: 80,
            backgroundColor: "#dfe4e8",
            justifyContent: "center",
            padding: 10
          }}
        >
          <View
            style={{
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center"
            }}
          >
            <Animate.View
              animation="slideInRight"
              duration={1000}
              style={{
                height: 50,
                backgroundColor: "white",
                flexDirection: "row",
                padding: 5,
                alignItems: "center"
              }}
            >
              <Icon name="search" style={{ fontSize: 18 }} color="#dfe4e8" />
              <TextInput
                placeholder="Search"
                style={{ fontSize: 18, paddingLeft: 15 }}
              />
            </Animate.View>
          </View>
        </View>
      </View>
    );
  }
}

export default Searchbar;
