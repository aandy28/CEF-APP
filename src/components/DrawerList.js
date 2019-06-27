import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions, DrawerActions } from "react-navigation";
import styles from "../styles/GlobalStyles";
import GLOBALS from "../GlobalVars.js";

const website_step_id = GLOBALS.WEBSITE_STEP_ID;
const fetch = createApolloFetch({
  uri: GLOBALS.BASE_GRAPHQL_URL
});

class DrawerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rootCategories: []
    };
  }
  navigateToScreen = id => () => {
    // TODO
    this.props.navigation.navigate("CategoryList", {
      category: id
    });
  };

  componentDidMount() {
    fetch({
      query: `{ rootCategories { name, id }}`,
      variables: { website_step_id }
    })
      .then(res => {
        this.setState({ rootCategories: res.data.rootCategories });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          {this.state.rootCategories.map((category, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.5}
                onPress={() => {
                  navigate("Categories", {
                    category: 1
                  });
                }}
                style={styles.screenStyle}
              >
                <Text style={styles.screenTextStyle}>{category.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

export default DrawerList;
