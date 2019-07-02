import * as DataSearchScreens from "./components/DataSearch";

import { evaluateChildDrawerTitle } from "./utils";

export default {
  DataSearch_Basic: {
    screen: DataSearchScreens.Basic,
    navigationOptions: evaluateChildDrawerTitle
  },
  "DataSearch_With Icon Position": {
    screen: DataSearchScreens.WithIconPosition,
    navigationOptions: evaluateChildDrawerTitle
  },
  "DataSearch_Without Search Icon": {
    screen: DataSearchScreens.WithoutSearchIcon,
    navigationOptions: evaluateChildDrawerTitle
  },
  "DataSearch_Without Autosuggest": {
    screen: DataSearchScreens.WithoutAutosuggest,
    navigationOptions: evaluateChildDrawerTitle
  },
  "DataSearch_With Custom Styles": {
    screen: DataSearchScreens.WithCustomStyles,
    navigationOptions: evaluateChildDrawerTitle
  },
  "DataSearch_With Default Suggestions": {
    screen: DataSearchScreens.WithDefaultSuggestions,
    navigationOptions: evaluateChildDrawerTitle
  },
  "DataSearch_With Default Selected": {
    screen: DataSearchScreens.WithDefaultSelected,
    navigationOptions: evaluateChildDrawerTitle
  },
  "DataSearch_With Fuzziness As Auto": {
    screen: DataSearchScreens.WithFuzzinessAsAuto,
    navigationOptions: evaluateChildDrawerTitle
  },
  DataSearch_Playground: {
    screen: DataSearchScreens.Playground,
    navigationOptions: evaluateChildDrawerTitle
  }
};
