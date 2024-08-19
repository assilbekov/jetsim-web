export const convertDaysText = (
  days: number,
  unitSingle: string,
  unitPlural: string
) => {
  if (days === 1) {
    return `${days} ${unitSingle}`;
  }

  return `${days} ${unitPlural}`;
};
