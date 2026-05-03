import { View } from "react-native";

import ThemedText from "@/components/ThemedText";
import { globalStyles } from "@/styles/global-styles";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemedText variant="main">50 x 50</ThemedText>

      <ThemedText variant="sub">2500</ThemedText>
    </View>
  );
};

export default CalculatorApp;
