class EventChainManager {
  static #chains: Map<string, EventChain> = new Map();

  static createChain(name: string) {
    const chain = new EventChain();
    this.#chains.set(name, chain);
    return chain;
  }
}

export const chain = (name: string) => EventChainManager.createChain(name);

export class EventChain {
  then() {}
  thenIf() {}
  thenNextFrame() {}
  thenUntil() {}
}
