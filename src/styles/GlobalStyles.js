import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerHome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: { flexDirection: "row", flex: 1 },
  headerContainer: {
    height: 150
  },
  headerText: {
    color: "#fff8f8"
  },
  screenContainer: {
    paddingTop: 20,
    width: "100%"
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    textAlign: "center"
  },
  selectedTextStyle: {
    fontWeight: "bold",
    color: "#00adff"
  },
  activeBackgroundColor: {
    backgroundColor: "grey"
  },
  twoCol: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  greyBg: { backgroundColor: "#ebefeb" }
});
