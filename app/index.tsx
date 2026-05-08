import { useEffect, useState } from "react";

import { View } from "react-native";

import ButtonRow from "@/components/ButtonRow";
import CalculatorButton from "@/components/CalculatorButton";
import ThemedText from "@/components/ThemedText";
import {
  DEFAULT_FORMULA_VALUE,
  DEFAULT_RESULT_VALUE,
} from "@/constants/textPanel";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { Operator } from "@/types/operator";
import {
  resolveOperation,
  tokenize,
  tokensToOperation,
} from "@/utils/calculate";
import {
  doesLastNumberHaveDecimals,
  getItemsButLast,
  getLastElement,
  isAfterDigit,
  isAfterDot,
  isAfterOperator,
  isAtInit,
  isDot,
  isOperator,
} from "@/utils/utils";

const CalculatorApp = () => {
  const [formula, setFormula] = useState(DEFAULT_FORMULA_VALUE);
  const [result, setResult] = useState(DEFAULT_RESULT_VALUE);

  const [mayPlaceDot, setMayPlaceDot] = useState(true);

  useEffect(() => {
    if (formula === DEFAULT_FORMULA_VALUE) return;

    const tokens = tokenize(formula);
    const operation = tokensToOperation(tokens);
    const resolution = resolveOperation(operation);
    setResult(resolution.toString());
  }, [formula]);

  const buildFormula = (key: string) => {
    if (isDot(key)) setMayPlaceDot(false);
    if (isOperator(key)) setMayPlaceDot(true);

    let toSet = "";

    if (isAtInit(formula)) {
      if (isOperator(key) && key !== Operator.Subtract) {
        return;
      }

      toSet = key;
    } else if (isAfterDigit(formula)) {
      if (isDot(key) && !mayPlaceDot) {
        return;
      }

      toSet = formula + key;
    } else if (isAfterOperator(formula)) {
      if (isOperator(key)) {
        toSet = getItemsButLast(formula) + key;
      } else {
        toSet = formula + key;
      }
    } else if (isAfterDot(formula)) {
      if (isDot(key)) {
        return;
      }

      toSet = formula + key;
    }

    setFormula(toSet);
  };

  const clearFormula = () => {
    setFormula(DEFAULT_FORMULA_VALUE);
    setResult(DEFAULT_RESULT_VALUE);
    setMayPlaceDot(true);
  };

  const deleteLastEntry = () => {
    if (formula.length === 1) {
      clearFormula();
    } else {
      let elementToDelete = getLastElement(formula);
      if (isDot(elementToDelete)) setMayPlaceDot(true);
      else if (isOperator(elementToDelete)) {
        const lastNumberHasDecimals = doesLastNumberHaveDecimals(
          getItemsButLast(formula),
        );
        if (lastNumberHasDecimals) {
          setMayPlaceDot(false);
        } else {
          setMayPlaceDot(true);
        }
      }

      setFormula(getItemsButLast(formula));
    }
  };

  const equal = () => {
    if (result !== DEFAULT_RESULT_VALUE) {
      setFormula(result);
      setResult(DEFAULT_RESULT_VALUE);
      setMayPlaceDot(true);
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
