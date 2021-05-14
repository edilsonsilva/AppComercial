import { StyleSheet } from "react-native";

export const styleFormat = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
    resizeMode: "contain",
  },
  btnApp: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "silver",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  btn: {
    borderColor: "silver",
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },
});
