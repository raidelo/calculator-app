import { useEffect, useState } from "react";

import {
  DEFAULT_FORMULA_VALUE,
  DEFAULT_RESULT_VALUE,
} from "@/constants/textPanel";

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

export function useCalculator() {
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

  return {
    formula,
    result,
    buildFormula,
    clearFormula,
    deleteLastEntry,
    equal,
  };
}
