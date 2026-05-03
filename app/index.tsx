import { View, Text } from "react-native";

import { Colors } from "@/constants/theme";

const CalculatorApp = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontFamily: "JetBrainsMono",
          color: Colors.textPrimary,
        }}
      >
        CalculatorApp
      </Text>
    </View>
  );
};

export default CalculatorApp;
