import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { createApolloFetch } from "apollo-fetch";
import GLOBALS from "../GlobalVars.js";
import Loading from "./helpers/loading";

const website_step_id = GLOBALS.WEBSITE_STEP_ID;
const fetch = createApolloFetch({
  uri: GLOBALS.BASE_GRAPHQL_URL
});

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  performTimeConsumingTask = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    fetch({
      query: `{ allProducts { description, stockCode, catalogue, id }}`,
      variables: { website_step_id }
    })
      .then(res => {
        return res.data.allProducts;
      })
      .catch(error => {
        console.log(error);
      });
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate("App");
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <View>
          <Image source={require("../images/cef_logo.png")} />
          <Loading color={"#B81D32"} />
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d02239"
  }
};

export default SplashScreen;
