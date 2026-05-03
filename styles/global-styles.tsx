import { StyleSheet } from "react-native";

import { Colors } from "@/constants/theme";

export const globalStyles = StyleSheet.create({
  background: { flex: 1, backgroundColor: Colors.background },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 40,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 60,
    textAlign: "right",
    fontWeight: 400,
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 35,
    textAlign: "right",
    fontWeight: 300,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 12,
  },

  button: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: Colors.darkGray,
    justifyContent: "center",
    marginHorizontal: 6,
  },

  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "white",
    fontWeight: 300,
    fontFamily: "JetBrainsMono",
  },
});
