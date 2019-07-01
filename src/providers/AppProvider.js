import React, { Component } from "react";
import { config } from "../config";

const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  state = {
    config
  };

  render() {
    const { children } = this.props;
    const { state } = this;

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
  }
}
