import { J$Number } from "./j$-number.js";
import { J$String } from "./j$-string.js";
import { J$UI } from "./j$-ui.js";

export class J$ {
  static isDefined<T>(value: T): boolean {
    return typeof value !== "undefined" && value !== null;
  }

  static UI = J$UI;
  static String = J$String;
  static Number = J$Number;
}

console.log(J$.String.format("{0}, {1} {2}", "Hello", "my name is", "Dylan"));
