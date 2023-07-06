export class J$UI {
  static toHTMLString(value: string) {
    if (typeof value !== "string") return "";

    return value.replace("\n", "<br>");
  }
}
