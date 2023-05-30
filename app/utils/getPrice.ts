export function getPrice(size = 250, finish = "Matte", frame = "None"): number {
  let price = size / 5;
  if (finish === "Gloss") {
    price += 30;
  }
  if (frame !== "None") {
    price += 20;
  }
  return Number(price.toFixed(2));
}
