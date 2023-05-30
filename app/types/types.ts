export enum EFinish {
  Matte = "MATTE",
  Gloss = "GLOSS",
}

export enum EFrame {
  None = "NONE",
  Natural = "NATURAL WOOD",
  Black = "BLACK WOOD",
  White = "WHITE WOOD",
  Graphite = "GRAPHITE",
}

export enum ESize {
  M = "MEDIUM",
  L = "LARGE",
  XL = "EXTRA LARGE",
}

export interface IDisplateInfo {
  img: string;
  id: string;
  title: string;
  category: string;
}

export type Specs = {
  price: number;
  size: number;
  frame: string;
  finish: string;
};
