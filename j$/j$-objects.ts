export class J$Object {
  static #recurse(
    obj: object,
    callback: (i: number, val: [string, any]) => void,
    searched: any[]
  ) {}

  static recurse(obj: object, callback: (i: number, val: [string, any]) => void) {
    return this.#recurse(obj, callback, []);
  }

  static recurseKeys(obj: object, callback: (i: number, val: string) => void) {
    this.recurse(obj, (i, val) => callback(i, val[0]));
  }

  static recurseValues(obj: object, callback: (i: number, val: any) => void) {
    this.recurse(obj, (i, val) => callback(i, val[1]));
  }
}
