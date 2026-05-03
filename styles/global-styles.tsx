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
});
