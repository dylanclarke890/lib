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
}
