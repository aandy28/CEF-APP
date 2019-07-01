import React, { Component } from "react";

const ProductContext = React.createContext();
export const ProductConsumer = ProductContext.Consumer;

export default class ProductProvider extends Component {
  state = {
    imageSizes: {
      category: "200x200",
      thumbnail: "60x60",
      upselling: "200x200"
    }
  };

  render() {
    const { state } = this;
    const { children } = this.props;

    return (
      <ProductContext.Provider value={state}>
        {children}
      </ProductContext.Provider>
    );
  }
}
