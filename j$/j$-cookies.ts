export class J$Cookies {
  static #ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
  static set(key: string, value: any, daysToExpire?: number) {
    const expirationDate = new Date();

    expirationDate.setTime(expirationDate.getTime() + (daysToExpire ?? 365) * this.#ONE_DAY_IN_MS);
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    document.cookie = `${key}=${value};expires=${expirationDate.toUTCString()}`;
  }

  static get(key: string) {
    const cookie = document.cookie
      .split("; ") // split into individual cookies
      .map((cookie) => cookie.split("=").map((c) => decodeURIComponent(c))) // split into decoded name/value pairs
      .find((cookie) => cookie[0] === key); // look for matching pair
    return typeof cookie === "undefined" ? undefined : cookie[1];
  }

  static has(key: string) {
    return typeof this.get(key) !== "undefined";
  }

  static remove(key: string) {
    document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  static clear() {
    document.cookie
      .split("; ") // split into individual cookies
      .map((cookie) => decodeURIComponent(cookie.split("=")[0])) // extract the name from each cookie
      .forEach((key) => this.remove(key));
  }
}
