import React from "react";
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import AppProvider from "./src/providers/AppProvider";
import DefaultScreen from "./src/components/HomeScreen";
import Cart from "./src/components/cart/";
import CategoryList from "./src/components/CategoryList";
import SubCategoryList from "./src/components/SubCategoryList";
import CategoryProductList from "./src/components/CategoryProductList";
import ProductList from "./src/components/ProductList";
import DetailsScreen from "./src/components/DetailsScreen";
import SplashScreen from "./src/components/SplashScreen";
import MainDrawer from "./src/drawers/MainDrawer";
import screenMapping from "./src/screenMapping";
import Logo from "./src/components/Logo";

const homeScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: DefaultScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const cartScreenStack = createStackNavigator(
  {
    CartScreen: {
      screen: Cart
    }
  },
  {
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const categoryListScreenStack = createStackNavigator(
  {
    CategoryList: {
      screen: CategoryList
    }
  },
  {
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const subCategoryScreenStack = createStackNavigator(
  {
    SubCategoryList: {
      screen: SubCategoryList,
      path: "category/:id"
    }
  },
  {
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const categoryProductsScreenStack = createStackNavigator(
  {
    CategoryProductList: {
      screen: CategoryProductList,
      path: "category/:id"
    }
  },
  {
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const productsScreenStack = createStackNavigator(
  {
    ProductList: {
      screen: ProductList
    }
  },
  {
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const detailScreenStack = createStackNavigator(
  {
    DetailsScreen: {
      screen: DetailsScreen,
      path: "detail/:id"
    }
  },
  {
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

// RootDrawer containing drawers for each components
// ...screenMapping
const RootDrawer = createDrawerNavigator(
  {
    Home: {
      screen: homeScreenStack
    },
    Cart: {
      screen: cartScreenStack
    },
    Categories: { screen: categoryListScreenStack },
    SubCategories: {
      screen: subCategoryScreenStack
    },
    CategoryProducts: { screen: categoryProductsScreenStack },
    Products: { screen: productsScreenStack },
    ProductDetails: { screen: detailScreenStack }
    // Register screens of all options of child components
  },
  {
    // Custom rendering component of drawer panel
    contentComponent: MainDrawer,
    defaultNavigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#d02239"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: RootDrawer
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <AppContainer />
      </AppProvider>
    );
  }
}

export default App;

// export default class App extends React.Component {
//   render() {
//     return <RootDrawer />;
//   }
// }
