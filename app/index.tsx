import { useState } from "react";

import { View } from "react-native";

import ButtonRow from "@/components/ButtonRow";
import CalculatorButton from "@/components/CalculatorButton";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";

const DEFAULT_FORMULA_VALUE = "0";
const DEFAULT_RESULT_VALUE = "";

enum Operator {
  Add = "+",
  Subtract = "-",
  Multiply = "x",
  Divide = "÷",
}

function isOperator(value: string): boolean {
  switch (value) {
    case Operator.Add:
    case Operator.Subtract:
    case Operator.Multiply:
    case Operator.Divide:
      return true;

    default:
      return false;
  }
}

function getItemsButLast(text: string): string {
  return text.slice(0, text.length - 1);
}

function getLastElement(text: string): string {
  return text.slice(text.length - 1);
}

const CalculatorApp = () => {
  const [formula, setFormula] = useState(DEFAULT_FORMULA_VALUE);
  const [result, setResult] = useState(DEFAULT_RESULT_VALUE);

  const buildFormula = (key: string) => {
    if (formula === DEFAULT_FORMULA_VALUE && !isOperator(key)) {
      setFormula(key);
    } else if (isOperator(getLastElement(formula)) && isOperator(key)) {
      setFormula(getItemsButLast(formula) + key);
    } else {
      setFormula(formula + key);
    }
  };

  const clearFormula = () => {
    setFormula(DEFAULT_FORMULA_VALUE);
  };

  const deleteLastEntry = () => {
    if (formula.length === 1) {
      setFormula(DEFAULT_FORMULA_VALUE);
    } else {
      setFormula(getItemsButLast(formula));
    }
  };

  const equal = () => {
    if (result !== DEFAULT_RESULT_VALUE) {
      setFormula(result);
      setResult(DEFAULT_RESULT_VALUE);
    }
  };

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
            label="÷"
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula("÷");
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
            label="x"
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula("x");
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
            label="-"
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula("-");
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
            label="+"
            backgroundColor={Colors.orange}
            onPress={() => {
              buildFormula("+");
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
