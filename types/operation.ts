import { Operator } from "./operator";
import { Atom } from "./tokens";

export class Operation {
  constructor(
    public operator: Operator,
    public left: Atom | Operation,
    public right: Atom | Operation,
  ) {}

  public toString(): string {
    return `( ${this.left} ${this.operator} ${this.right} )`;
  }
}
