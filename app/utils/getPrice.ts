import { Specs } from "../types/types";

export function getPrice(obj: Specs): number {
  let price = obj.size / 3;

  console.log(obj.finish, obj.frame);
  if (obj.finish !== "Matte") {
    price = price + 30;
  }

  if (obj.frame !== "None") {
    price += 25;
  }

  return Math.ceil(price);
}
