type AddDateOptions = {
  ms?: number;
  secs?: number;
  mins?: number;
  hours?: number;
};

export class J$Dates {
  static daysBetween(a: Date, b: Date) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / MS_PER_DAY);
  }

  static add(date: Date, { ms, secs, mins, hours }: AddDateOptions = {}) {
    if (!(date instanceof Date)) return date;

    let totalMs = 0;
    if (typeof ms === "number") totalMs += ms;
    if (typeof secs === "number") totalMs += secs * 1000;
    if (typeof mins === "number") totalMs += mins * 60000;
    if (typeof hours === "number") totalMs += hours * 3600000;

    const updatedDate = new Date(date);
    updatedDate.setMilliseconds(updatedDate.getMilliseconds() + totalMs);

    return updatedDate;
  }

  static addMilliseconds(date: Date, ms: number) {
    return this.add(date, { ms });
  }

  static addSeconds(date: Date, secs: number) {
    return this.add(date, { secs });
  }

  static addMinutes(date: Date, mins: number) {
    return this.add(date, { mins });
  }

  static addHours(date: Date, hours: number) {
    return this.add(date, { hours });
  }

  static utcOffset(date: Date) {
    return (date || new Date()).getTimezoneOffset();
  }

  static toUTC(date: Date) {
    return this.addMinutes(date, -new Date().getTimezoneOffset());
  }

  static toLocal(date: Date) {
    return this.addMinutes(date, new Date().getTimezoneOffset());
  }

  static isBeforeToday(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  static isToday(date: Date) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  static durationStringToMs(durationString: string) {
    if (typeof durationString !== "string") return 0;

    const [hours, minutes, secsOrSecsAndMs] = durationString.split(":");
    let seconds, milliseconds;
    if (typeof secsOrSecsAndMs === "string" && secsOrSecsAndMs.includes("."))
      [seconds, milliseconds] = secsOrSecsAndMs.split(".");
    else seconds = secsOrSecsAndMs;

    // Parse hours, minutes, seconds, and milliseconds as integers
    const hoursInt = parseInt(hours) || 0;
    const minutesInt = parseInt(minutes) || 0;
    const secondsInt = parseInt(seconds) || 0;
    const millisecondsInt = typeof milliseconds === "undefined" ? 0 : parseInt(milliseconds) || 0;

    // Calculate the total duration in milliseconds
    const totalMilliseconds =
      hoursInt * 3600000 + // 1 hour = 3600000 milliseconds
      minutesInt * 60000 + // 1 minute = 60000 milliseconds
      secondsInt * 1000 + // 1 second = 1000 milliseconds
      millisecondsInt;

    return totalMilliseconds;
  }
}
