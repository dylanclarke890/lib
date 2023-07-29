type ElementSelector = string | HTMLElement;

type J$DialogOptions = {
  container?: ElementSelector;
  classes?: string;
  removeOnClose?: boolean;
  width?: number;
  minHeight?: number;
  height?: number;
  fullscreen?: boolean;
  draggable?: boolean;
  position?: {
    from: string;
    to: string;
    within: ElementSelector;
  };
};

export class J$Dialog {
  static get #defaultOpts() {
    return {
      container: undefined,
      classes: undefined,
      removeOnClose: true,
      width: 500,
      minHeight: "none",
      height: 500,
      fullscreen: false,
      draggable: false,
      position: {
        from: "top left",
        to: "top left",
        within: undefined,
      },
    };
  }

  opts: J$DialogOptions;

  constructor(opts: J$DialogOptions) {
    this.opts = opts;
  }
}
