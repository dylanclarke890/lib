import { J$Number } from "./j$-number.js";
import { J$String } from "./j$-string.js";

class J$UI {
  static toHTMLString(value: string) {
    if (typeof value !== "string") return "";

    return value.replace("\n", "<br>");
  }
}

export class J$ {
  static isDefined<T>(value: T): boolean {
    return typeof value !== "undefined" && value !== null;
  }

  static UI = J$UI;

  static String = J$String;
  static Number = J$Number;
}
