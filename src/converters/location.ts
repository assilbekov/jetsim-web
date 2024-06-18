import { Location } from "@/models/Location";
import { convertCurrencyCodeToSymbol } from "./prices";

export const convertLocationBestCost = (location: Location) => {
  return `from ${convertCurrencyCodeToSymbol(
    location.bestCost?.cost.currency || ""
  )}${location.bestCost?.cost.price}/${location.bestCost?.period}`;
};
