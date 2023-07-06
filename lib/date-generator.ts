type DateSettings = {
  ms?: number;
  secs?: number;
  mins?: number;
  hrs?: number;
  days?: number;
  weeks?: number;
  months?: number;
  years?: number;
  date?: Date;
  dates?: Date[];
};

export class J$Date {
  #current: Date;
  #size: number;
  #history: Date[];

  constructor(startDate?: Date, opts?: any) {
    this.#current = startDate ?? new Date();
    this.#size = opts?.size ?? 100;
    this.#history = [];
    if (opts?.trackInitialDate) this.#history.push(this.#current);
  }

  get prev() {
    return [...this.#history];
  }

  get current() {
    return new Date(this.#current.valueOf()); // Prevents external mutations
  }

  #updateHistory(track: boolean) {
    if (!track) return;

    this.#history.push(new Date(this.#current.valueOf()));
    if (this.#history.length > this.#size) this.#history.shift();
  }

  add(value: DateSettings, track = true) {
    if (typeof value === "undefined") return this;
    const { ms, secs, hrs, days, weeks, months, years, date, dates } = value;

    if (ms) this.addMs(ms, false);
    if (secs) this.addSecs(secs, false);
    if (hrs) this.addHours(hrs, false);
    if (days) this.addDays(days, false);
    if (weeks) this.addDays(weeks * 7, false);
    if (months) this.addMonths(months, false);
    if (years) this.addYears(years, false);
    if (date && date instanceof Date) this.addDate(date, false);
    if (dates && Array.isArray(dates)) this.addDates(dates, false);

    this.#updateHistory(track);
    return this;
  }

  addMs(value: number, track = true) {
    this.#current.setMilliseconds(this.#current.getMilliseconds() + value);
    this.#updateHistory(track);
    return this;
  }

  addSecs(value: number, track = true) {
    this.#current.setSeconds(this.#current.getSeconds() + value);
    this.#updateHistory(track);
    return this;
  }

  addMins(value: number, track = true) {
    this.#current.setMinutes(this.#current.getMinutes() + value);
    this.#updateHistory(track);
    return this;
  }

  addHours(value: number, track = true) {
    this.#current.setHours(this.#current.getHours() + value);
    this.#updateHistory(track);
    return this;
  }

  addDays(value: number, track = true) {
    this.#current.setDate(this.#current.getDate() + value);
    this.#updateHistory(track);
    return this;
  }

  addMonths(value: number, track = true) {
    this.#current.setMonth(this.#current.getMonth() + value);
    this.#updateHistory(track);
    return this;
  }

  addYears(value: number, track = true) {
    this.#current.setMonth(this.#current.getMonth() + value);
    this.#updateHistory(track);
    return this;
  }

  addDate(value: Date, track = true) {
    this.#current.setMilliseconds(this.#current.getMilliseconds() + value.getMilliseconds());
    this.#updateHistory(track);
    return this;
  }

  addDates(values: Date[], track = true) {
    values.forEach((v) => v instanceof Date && this.addDate(v, false));
    this.#updateHistory(track);
    return this;
  }

  getValue() {
    return this.#current;
  }
}
