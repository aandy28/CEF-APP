import React, { Component } from "react";
import { Text, View, TextInput, FlatList, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import * as Animate from "react-native-animatable";

const listItems = [
  "Writing",
  "Larning",
  "Descipling",
  "Productivity",
  "Personal",
  "Meditate",
  "Mindfulness",
  "Buddha",
  "Dhamma",
  "Health",
  "Fitness",
  "Music"
];

class searchResults extends Component {
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
          <FlatList
            style={{
              backgroundColor: this.state.searchBarFocused
                ? "rgba(0,0,0,0.3)"
                : "white"
            }}
            data={listItems}
            renderItem={({ item }) => (
              <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default Searchbar;
