import { StyleSheet } from "react-native";

import { Colors } from "@/constants/theme";
import { BUTTON_DEFAULT_FLEX, BUTTON_GAP } from "@/constants/button";

export const globalStyles = StyleSheet.create({
  background: { flex: 1, backgroundColor: Colors.background },

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

  calculatorContainer: {
    flex: 1,
  },

  textContainer: { flex: 1, justifyContent: "flex-end" },

  buttonsContainer: { flex: 2, gap: BUTTON_GAP, justifyContent: "flex-end" },

  row: { flexDirection: "row", gap: BUTTON_GAP, justifyContent: "center" },

  button: {
    flex: BUTTON_DEFAULT_FLEX,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 30,
    color: "white",
    fontWeight: 300,
    fontFamily: "JetBrainsMono",
  },
});
