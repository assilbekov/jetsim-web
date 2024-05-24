import getSymbolFromCurrency from "currency-symbol-map";

export const convertCurrencyCodeToSymbol = (currencyCode: string) => {
  return getSymbolFromCurrency(currencyCode);
};
