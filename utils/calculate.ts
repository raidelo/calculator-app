import { Operator } from "@/types/operator";
import { Atom, Token } from "@/types/tokens";

export function operate(operator: Operator, left: Atom, right: Atom) {
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

export function tokenize(text: string): Array<Token> {
  let tokens = new Array<Token>();

  let current_atom: string = "";

  for (let index = 0; index < text.length; index++) {
    const element = text.charAt(index);

    switch (element) {
      case Operator.Add:
        tokens.push(parseFloat(current_atom));
        tokens.push(Operator.Add);
        current_atom = "";
        continue;
      case Operator.Subtract:
        tokens.push(parseFloat(current_atom));
        tokens.push(Operator.Subtract);
        current_atom = "";
        continue;
      case Operator.Multiply:
        tokens.push(parseFloat(current_atom));
        tokens.push(Operator.Multiply);
        current_atom = "";
        continue;
      case Operator.Divide:
        tokens.push(parseFloat(current_atom));
        tokens.push(Operator.Divide);
        current_atom = "";
        continue;
    }

    current_atom = current_atom + element;
  }

  tokens.push(parseFloat(current_atom));

  return tokens;
}
