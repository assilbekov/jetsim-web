import { convertCurrencyCodeToSymbol } from "@/convertCurrency";
import { Location } from "@/models/Location";

export const convertLocationBestCost = (location: Location) => {
  return `from ${convertCurrencyCodeToSymbol(
    location.bestCost?.cost.currency || ""
  )}${location.bestCost?.cost.price}/${location.bestCost?.period}`;
};
