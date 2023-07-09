import { J$ } from "./j$.js";

export class J$Object {
  static isPlainObject(object: any) {
    return typeof object === "object" && object !== null && !Array.isArray(object);
  }

  static #recurse(
    object: { [x: string]: any },
    callback: (key: string, value: any) => void,
    visited = new WeakSet()
  ) {
    if (!this.isPlainObject(object) || typeof callback !== "function") return;

    visited.add(object); // Mark the object as visited

    Object.entries(object).forEach(([key, value]) => {
      callback(key, value);
      if (typeof value === "object" && value !== null && !visited.has(value)) {
        this.#recurse(value, callback, visited); // Recursive call with the visited set
      }
    });

    visited.delete(object); // Remove the object from the visited set after recursion completes
  }

  static recurse(object: { [x: string]: any }, callback: (key: string, value: any) => void) {
    this.#recurse(object, callback);
  }

  static recurseKeys(obj: object, callback: (key: string) => void) {
    this.recurse(obj, (key) => callback(key));
  }

  static recurseValues(obj: object, callback: (value: any) => void) {
    this.recurse(obj, (_key, value) => callback(value));
  }

  static zip(...arrays: any[][]) {
    const largestArrayLength = arrays.reduce(
      (prev, curr) => (curr.length > prev ? curr.length : prev),
      0
    );

    const result = [];
    for (let i = 0; i < largestArrayLength; i++) {
      const item = [];

      for (let j = 0; j < arrays.length; j++)
        if (J$.isDefined(arrays[j][i])) item.push(arrays[j][i]);

      result.push(item);
    }

    return result;
  }
}
