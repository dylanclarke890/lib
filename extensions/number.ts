export const NumberExtensions = {
  tryParse(value: string): number {
    const parsed = parseInt(value);
    if (Number.isNaN(value)) return 0;
    return parsed;
  },
};
