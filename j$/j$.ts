import { J$Cookies } from "./j$-cookies.js";
import { J$Dates } from "./j$-dates.js";
import { J$Number } from "./j$-number.js";
import { J$Object } from "./j$-objects.js";
import { J$String } from "./j$-string.js";
import { J$UI } from "./j$-ui.js";

export class J$ {
  static isDefined<T>(value: T): boolean {
    return typeof value !== "undefined" && value !== null;
  }

  static Cookies = J$Cookies;
  static UI = J$UI;
  static String = J$String;
  static Number = J$Number;
  static Object = J$Object;
  static Date = J$Dates;
}
