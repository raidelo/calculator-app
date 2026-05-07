import { Operator } from "@/types/operator";
import { Atom } from "@/types/tokens";

function operate(operator: Operator, left: Atom, right: Atom) {
  switch (operator) {
    case Operator.Add:
      return left + right;
    case Operator.Subtract:
      return left - right;
    case Operator.Multiply:
      return left * right;
    case Operator.Divide:
      return left / right;
  }
}
