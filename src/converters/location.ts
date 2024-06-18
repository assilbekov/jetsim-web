import { Location } from "@/models/Location";
import { convertPrice } from "./prices";

export const convertLocationBestCost = (location: Location) => {
  const price = location.bestCost?.cost.price || 0;
  const currency = location.bestCost?.cost.currency || "";
  return `from ${convertPrice(price, currency)}/${location.bestCost?.period}`;
};
