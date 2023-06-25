export const StringExtensions = {
  isNullOrEmpty(value: string) : boolean {
    if (typeof value === "undefined" || value === "")
      return true;

    return false;
  },

  isNullOrWhiteSpace(value: string) : boolean {
    if (typeof value === "undefined")
      return true;
    
    if (value.replace(" ", "") === "")
      return true;
    
    return false;
  },

  isString(value: any) : boolean {
    return typeof value === "string" || value instanceof String;
  }
}