import { Operation } from "@/types/operation";
import { Operator } from "@/types/operator";
import { Atom, Token } from "@/types/tokens";
import { getGlues } from "./utils";

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

export function tokensToOperation(tokens: Token[]): Operation | Atom {
  const [result, _] = _tokensToOperation(tokens, 0, 0);
  return result;
}

function _tokensToOperation(
  tokens: Token[],
  index: number = 0,
  lastOpRightGlue: number = 0,
): [Operation | Atom, number] {
  let left: Operation | Token = tokens[index];

  if (typeof left !== "number") {
    throw new Error("tokens[1] must be an atom (number)");
  }

  let right: Operation | Token;

  index = index + 1;

  while (index < tokens.length) {
    let op: Token = tokens[index];

    // an operator is a string
    if (typeof op !== "string") {
      break;
    }

    let [opLeftGlue, opRightGlue] = getGlues(op);

    if (lastOpRightGlue > opLeftGlue) {
      break;
    }

    [right, index] = _tokensToOperation(tokens, index + 1, opRightGlue);

    left = new Operation(op, left, right);
  }

  return [left, index];
}

export function resolveOperation(operation: Operation | Atom): Atom {
  if (typeof operation === "number") return operation;

  if (typeof operation.left === "number" && typeof operation.right === "number")
    return operate(operation.operator, operation.left, operation.right);

  return resolveOperation(
    new Operation(
      operation.operator,
      resolveOperation(operation.left),
      resolveOperation(operation.right),
    ),
  );
}
