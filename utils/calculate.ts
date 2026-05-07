import { Operator } from "@/types/operator";
import { Atom, Token } from "@/types/tokens";

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

function tokenize(text: string): Array<Token> {
  let tokens = new Array<Token>();

  let current_atom: string = "";

  for (let index = 0; index < text.length; index++) {
    const element = text.charAt(index);

    switch (element) {
      case Operator.Add:
        tokens.push(Operator.Add);
        continue;
      case Operator.Subtract:
        tokens.push(Operator.Subtract);
        continue;
      case Operator.Multiply:
        tokens.push(Operator.Multiply);
        continue;
      case Operator.Divide:
        tokens.push(Operator.Divide);
        continue;
    }

    current_atom = current_atom + element;
  }

  tokens.push(parseFloat(current_atom));

  return tokens;
}
