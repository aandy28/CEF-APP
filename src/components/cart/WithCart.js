import * as React from "react";
import CartContext from "./CartContext";

export const withCart = Component => {
  return function fn(props) {
    console.log(props);
    return (
      <CartContext.Consumer>
        {context => <Component {...props} {...context} />}
      </CartContext.Consumer>
    );
  };
};
