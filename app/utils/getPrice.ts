export function getPrice(size = "MEDIUM", finish = "MATTE", frame = "NONE") {
  if (finish === "MATTE") {
    if (size === "MEDIUM") {
      if (frame !== "NONE") {
        return 69;
      } else {
        return 44;
      }
    } else if (size === "LARGE") {
      if (frame !== "NONE") {
        return 129;
      } else {
        return 89;
      }
    }
  } else if (finish === "GLOSS") {
    if (size === "MEDIUM") {
      if (frame !== "NONE") {
        return 78;
      } else {
        return 53;
      }
    } else if (size === "LARGE") {
      if (frame !== "NONE") {
        return 148;
      } else {
        return 108;
      }
    }
  }

  return 149;
}
