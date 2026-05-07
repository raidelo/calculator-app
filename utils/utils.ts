import { DEFAULT_FORMULA_VALUE } from "@/constants/textPanel";
import { Operator } from "@/types/operator";

export function isAtInit(text: string): boolean {
  return text === DEFAULT_FORMULA_VALUE;
}

export function isAfterDigit(text: string): boolean {
  return isDigit(getLastElement(text));
}

export function isAfterOperator(text: string): boolean {
  return isOperator(getLastElement(text));
}

export function isAfterDot(text: string): boolean {
  return isDot(getLastElement(text));
}

export function isDigit(text: string): boolean {
  return /^\d$/.test(text);
}

export function isOperator(value: string): boolean {
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

export function isDot(text: string): boolean {
  return text === ".";
}

export function getItemsButLast(text: string): string {
  return text.slice(0, text.length - 1);
}

export function getLastElement(text: string): string {
  return text.slice(text.length - 1);
}

export function doesLastNumberHaveDecimals(text: string): boolean {
  for (let index = text.length - 1; index >= 0; index--) {
    const element = text.charAt(index);

    if (isDot(element)) return true;
    else if (isOperator(element)) return false;
  }
  return false;
}

export function getGlues(operator: Operator): [number, number] {
  switch (operator) {
    case Operator.Add:
    case Operator.Subtract:
      return [1, 2];
    case Operator.Multiply:
    case Operator.Divide:
      return [3, 4];
  }
}
