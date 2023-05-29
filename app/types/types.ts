export enum EFinish {
  Matte = "MATTE",
  Gloss = "GLOSS",
}

export enum EFrame {
  None = "None",
  Natural_Wood = "Natural Wood",
  Black_Wood = "Black Wood",
  White_Wood = "White Wood",
  Graphite = "Graphite",
}

export enum ESize {
  Medium = "Medium",
  Large = "Large",
  Extra_Large = "Extra Large",
}

export interface IDisplateInfo {
  img: string | null;
  id: string | null;
  title: string | null;
  category: string | null;
}
