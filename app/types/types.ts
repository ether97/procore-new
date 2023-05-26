export enum EFinish {
  Matte = "MATTE",
  Gloss = "GLOSS",
}

export enum EFrame {
  None = "NONE",
  Natural_Wood = "NATURAL_WOOD",
  Black_Wood = "BLACK_WOOD",
  White_Wood = "WHITE_WOOD",
  Graphite = "GRAPHITE",
}

export enum ESize {
  M = "MEDIUM",
  L = "LARGE",
  XL = "EXTRA_LARGE",
}

export interface IDisplateInfo {
  img: string | null;
  id: string | null;
  title: string | null;
  category: string | null;
}
