import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  ScrollView
} from "react-native";

import { DrawerActions } from "react-navigation";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
// import SearchBar from "./searchbar/";
import CartPreview from "./cart/CartPreview";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: "" };
    this.arrayholder = [];
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Home",
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
  componentDidMount() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  handleChangeText = text => {
    console.log(text);
  };
  handleClearText = text => {
    this.search.clear();
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#080808"
        }}
      />
    );
  };
  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView style={{ backgroundColor: "#D12139" }}>
        <SearchBar
          lightTheme
          onChangeText={text => this.SearchFilterFunction(text)}
          onClearText={() => this.SearchFilterFunction("")}
          placeholder="Type Here..."
          value={this.state.search}
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <Text style={styles.textStyle}>{item.title}</Text>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10, elevation: 4 }}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* <SearchBar /> */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: 300,
            marginBottom: 40
          }}
          onPress={() => {
            navigate("PromoScreen", {
              promo: 1
            });
          }}
        >
          <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{
              uri:
                "https://04646a9cf351cc0d3888-b8b406d15fe93f790abb5bf0e9ab7ab3.ssl.cf3.rackcdn.com/images/promotions/production/normal/nest-online-deals-8cfd5b03d640dca15a97ea0e01d97c03.jpg?1560344920"
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingHorizontal: 10,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              height: 200,
              aspectRatio: 1,
              flexBasis: 140,
              margin: 10,
              backgroundColor: "rgba(255, 255, 255, .2)",
              marginBottom: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15
            }}
            onPress={() => {
              navigate("Categories");
            }}
          >
            <Icon
              name="gift"
              size={40}
              style={{ marginBottom: 10 }}
              color="#A31A2C"
            />
            <Text style={{ color: "#ffffff", fontSize: 20 }}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              height: 200,
              aspectRatio: 1,
              flexBasis: 140,
              margin: 10,
              backgroundColor: "rgba(255, 255, 255, .2)",
              marginBottom: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15
            }}
            onPress={() => {
              navigate("ProductList");
            }}
          >
            <Icon
              name="package"
              size={40}
              style={{ marginBottom: 10 }}
              color="#A31A2C"
            />
            <Text style={{ color: "#ffffff", fontSize: 20 }}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              height: 200,
              aspectRatio: 1,
              flexBasis: 140,
              margin: 10,
              backgroundColor: "rgba(255, 255, 255, .2)",
              marginBottom: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15
            }}
            onPress={() => {
              navigate("Promos");
            }}
          >
            <Icon
              name="award"
              size={40}
              style={{ marginBottom: 10 }}
              color="#A31A2C"
            />
            <Text style={{ color: "#ffffff", fontSize: 20 }}>Promos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              height: 200,
              aspectRatio: 1,
              flexBasis: 140,
              margin: 10,
              backgroundColor: "rgba(255, 255, 255, .2)",
              marginBottom: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15
            }}
            onPress={() => {
              navigate("Cart");
            }}
          >
            <Icon
              name="shopping-cart"
              size={40}
              style={{ marginBottom: 10 }}
              color="#A31A2C"
            />
            <Text style={{ color: "#ffffff", fontSize: 20 }}>Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS == "ios" ? 30 : 0
  },
  textStyle: {
    padding: 10
  }
});

export default HomeScreen;
