export class J$String {
  static isNullOrEmpty(value: string): boolean {
    if (typeof value === "undefined" || value === "") return true;

    return false;
  }

  static isNullOrWhiteSpace(value: string): boolean {
    if (typeof value === "undefined") return true;

    if (value.replace(" ", "") === "") return true;

    return false;
  }

  static isString(value: any): boolean {
    return typeof value === "string" || value instanceof String;
  }

  static format(value: string, ...args: string[]) {
    let i = args.length;
    while (i--) value = value.replace(new RegExp(`\\{${i}\\}`, "gm"), args[i]);
    return value;
  }

  static toHTMLString(value: string) {
    if (typeof value !== "string") return "";
    return value.replace("\n", "<br>");
  }

  static hashCode(value: string) {
    let hash = 0;

    for (let i = 0; i < value.length; i++) {
      hash = (hash << 5) - hash + value.charCodeAt(i);
      hash |= 0;
    }

    return hash;
  }
}