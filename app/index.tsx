import { View } from "react-native";

import ButtonRow from "@/components/ButtonRow";
import CalculatorButton from "@/components/CalculatorButton";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { Operator } from "@/types/operator";

const CalculatorApp = () => {
  const {
    formula,
    result,
    buildFormula,
    clearFormula,
    deleteLastEntry,
    equal,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={globalStyles.textContainer}>
        <ThemedText variant="main">{formula}</ThemedText>

        <ThemedText variant="sub">{result}</ThemedText>
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.buttonsContainer}>
        <ButtonRow>
          <CalculatorButton
            label="C"
            backgroundColor={Colors.lightGray}
            blackText
            onPress={() => {
              clearFormula();
            }}
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
            onPress={() => {
              deleteLastEntry();
            }}
          />
          <CalculatorButton
            label={Operator.Divide}
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula(Operator.Divide);
            }}
          />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton
            label="7"
            onPress={() => {
              buildFormula("7");
            }}
          />
          <CalculatorButton
            label="8"
            onPress={() => {
              buildFormula("8");
            }}
          />
          <CalculatorButton
            label="9"
            onPress={() => {
              buildFormula("9");
            }}
          />
          <CalculatorButton
            label={Operator.Multiply}
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula(Operator.Multiply);
            }}
          />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton
            label="4"
            onPress={() => {
              buildFormula("4");
            }}
          />
          <CalculatorButton
            label="5"
            onPress={() => {
              buildFormula("5");
            }}
          />
          <CalculatorButton
            label="6"
            onPress={() => {
              buildFormula("6");
            }}
          />
          <CalculatorButton
            label={Operator.Subtract}
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula(Operator.Subtract);
            }}
          />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton
            label="1"
            onPress={() => {
              buildFormula("1");
            }}
          />
          <CalculatorButton
            label="2"
            onPress={() => {
              buildFormula("2");
            }}
          />
          <CalculatorButton
            label="3"
            onPress={() => {
              buildFormula("3");
            }}
          />
          <CalculatorButton
            label={Operator.Add}
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula(Operator.Add);
            }}
          />
        </ButtonRow>

        <ButtonRow>
          <CalculatorButton
            label="0"
            size={2}
            onPress={() => {
              buildFormula("0");
            }}
          />
          <CalculatorButton
            label="."
            onPress={() => {
              buildFormula(".");
            }}
          />
          <CalculatorButton
            label="="
            backgroundColor={Colors.orange}
            onPress={() => {
              equal();
            }}
          />
        </ButtonRow>
      </View>
    </View>
  );
};

export default CalculatorApp;
