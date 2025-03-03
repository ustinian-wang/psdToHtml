declare module 'psd.js' {
  interface PsdImage {
      saveAsPng(): Promise<void>;
  }

  interface PsdTree {
      export(): any;
      descendants(): any[];
      children(): any[];
  }

  interface PsdFile {
      tree(): PsdTree;
      parse(): void;
      image: PsdImage;
  }

  export function fromFile(path: string): Promise<PsdFile>;
  export function fromBuffer(buffer: Buffer): Promise<PsdFile>;
}