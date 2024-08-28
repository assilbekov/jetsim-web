export const clsx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes < 1 || !bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function convertDateToISO(dateTimeString: string) {
  const [date] = dateTimeString.split(" ");
  const [YYYY, MM, DD] = date.split("-");

  return `${DD}.${MM}.${YYYY}`;
}

export const convertDateDiffToText = (
  d1: Date,
  d2: Date,
  translations: {
    hourSingular: string;
    hourPlural: string;
    daySingular: string;
    dayPlural: string;
    monthSingular: string;
    monthPlural: string;
  }
): string => {
  const diffTime = Math.abs(d1.getTime() - d2.getTime());
  const diffHours = Math.round(diffTime / (1000 * 60 * 60));
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.round(diffDays / 30);

  if (!diffTime) return "";

  if (diffMonths >= 1) {
    return `${diffMonths} ${
      diffMonths > 1 ? translations.monthPlural : translations.monthSingular
    }`;
  }

  if (diffDays >= 1) {
    return `${diffDays} ${
      diffMonths > 1 ? translations.dayPlural : translations.daySingular
    }`;
  }

  return `${diffHours} ${
    diffMonths > 1 ? translations.hourPlural : translations.hourSingular
  }`;
};

export const convertLPACodeToBlocks = (
  lpaCode: string
): {
  addr: string;
  activationCodeIOS: string;
  activationCodeAndroid: string;
} => {
  const [smdp, addr, activationCodeIOS] = lpaCode.split("$");

  return { addr, activationCodeIOS, activationCodeAndroid: lpaCode };
};
