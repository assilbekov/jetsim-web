import getSymbolFromCurrency from "currency-symbol-map";

export const convertCurrencyCodeToSymbol = (currencyCode: string) => {
  return getSymbolFromCurrency(currencyCode);
};

export const convertPrice = (price: number, currency: string) => {
  return `${convertCurrencyCodeToSymbol(currency)}${price / 100}`;
};
