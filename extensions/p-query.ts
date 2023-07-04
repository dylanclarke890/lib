import { J$ } from "./j$.js";

type PQueryElement = HTMLElement[] | HTMLElement | null;

export class PQuery {
  #elements: HTMLElement[];

  constructor(elements: PQueryElement) {
    this.#elements = [];
    this.#assignElements(elements);
  }

  #assignElements(elements: PQueryElement) {
    if (!J$.isDefined(elements)) return;

    if (elements instanceof HTMLElement) this.#elements.push(elements);
    else this.#elements.push(...elements!); // TODO: probably won't work
  }
}

export function $(selector: string | HTMLElement): PQuery | null {
  let element: HTMLElement | null;

  if (typeof selector === "undefined") element = null;
  else if (selector instanceof HTMLElement) element = selector;
  else if (typeof selector === "string") element = document.querySelector(selector);
  else element = null;

  return new PQuery(element);
}
