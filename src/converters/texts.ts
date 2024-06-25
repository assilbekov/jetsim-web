export const convertDaysText = (days: number) => {
  if (days === 1) {
    return "1 day";
  }

  return `${days} days`;
};
