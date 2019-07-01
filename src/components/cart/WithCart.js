import * as React from "react";
import CartContext from "./CartContext";

const withCart = Component => {
  return function fn(props) {
    return (
      <CartContext.Consumer>
        {context => <Component {...props} {...context} />}
      </CartContext.Consumer>
    );
  };
};

export default withCart;
