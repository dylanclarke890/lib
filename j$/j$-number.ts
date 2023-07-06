export class J$Number {
  static tryParse(value: string): [boolean, number] {
    const parsed = parseInt(value);
    if (Number.isNaN(value)) return [false, 0];
    return [true, parsed];
  }
}
