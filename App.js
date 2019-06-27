import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import React from "react";
import SplashScreen from "./src/components/SplashScreen";
import HomeScreen from "./src/components/HomeScreen";
import ProductList from "./src/components/ProductList";
import CategoryList from "./src/components/CategoryList";
import CategoryProductList from "./src/components/CategoryProductList";
import DetailsScreen from "./src/components/DetailsScreen";
import PromoScreen from "./src/components/PromoScreen";
import CartProvider from "./src/components/cart/CartProvider";
import Logo from "./src/components/Logo";

const homeScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
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

const promoScreenStack = createStackNavigator(
  {
    PromoScreen: {
      screen: PromoScreen,
      path: "promo/:id"
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

const cartScreenStack = createStackNavigator(
  {
    CartScreen: {
      screen: CartProvider,
      path: "cart/:id"
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

const MainNavigator = createDrawerNavigator({
  Home: { screen: homeScreenStack },
  Products: { screen: productsScreenStack },
  ProductDetails: { screen: detailScreenStack },
  Categories: { screen: categoryListScreenStack },
  CategoryProducts: { screen: categoryProductsScreenStack },
  Promos: { screen: promoScreenStack },
  Cart: { screen: cartScreenStack }
});

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: MainNavigator
});

const App = createAppContainer(InitialNavigator);

export default App;
