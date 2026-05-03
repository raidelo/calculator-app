import { View } from "react-native";

import ThemedText from "@/components/ThemedText";
import { globalStyles } from "@/styles/global-styles";
import CalculatorButton from "@/components/CalculatorButton";
import ButtonRow from "@/components/ButtonRow";
import { Colors } from "@/constants/theme";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={globalStyles.textContainer}>
        <ThemedText variant="main">50 x 50</ThemedText>

        <ThemedText variant="sub">2500</ThemedText>
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.buttonsContainer}>
        <ButtonRow>
          <CalculatorButton
            label="C"
            backgroundColor={Colors.lightGray}
            blackText
          />
          <CalculatorButton
            label="+/-"
            backgroundColor={Colors.lightGray}
            blackText
          />
          <CalculatorButton
            label="del"
            backgroundColor={Colors.lightGray}
            blackText
          />
          <CalculatorButton label="÷" backgroundColor={Colors.orange} />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton label="7" />
          <CalculatorButton label="8" />
          <CalculatorButton label="9" />
          <CalculatorButton label="x" backgroundColor={Colors.orange} />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton label="4" />
          <CalculatorButton label="5" />
          <CalculatorButton label="6" />
          <CalculatorButton label="-" backgroundColor={Colors.orange} />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton label="1" />
          <CalculatorButton label="2" />
          <CalculatorButton label="3" />
          <CalculatorButton label="+" backgroundColor={Colors.orange} />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton label="0" size={2} />
          <CalculatorButton label="." />
          <CalculatorButton label="=" backgroundColor={Colors.orange} />
        </ButtonRow>
      </View>
    </View>
  );
};

export default CalculatorApp;
