export const clsx = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");

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
    minutesSingular: string;
    minutesPlural: string;
    hourSingular: string;
    hourPlural: string;
    daySingular: string;
    dayPlural: string;
    monthSingular: string;
    monthPlural: string;
    yearSingular: string;
    yearPlural: string;
  }
): string => {
  const diffTime = Math.abs(d1.getTime() - d2.getTime());
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (!diffTime) return "";

  if (diffMinutes < 60) {
    return `${diffMinutes} ${
      diffMinutes > 1
        ? translations.minutesPlural
        : translations.minutesSingular
    }`;
  }

  if (diffHours < 24) {
    return `${diffHours} ${
      diffHours > 1 ? translations.hourPlural : translations.hourSingular
    }`;
  }

  if (diffDays < 30) {
    return `${diffDays} ${
      diffDays > 1 ? translations.dayPlural : translations.daySingular
    }`;
  }

  if (diffMonths < 12) {
    return `${diffMonths} ${
      diffMonths > 1 ? translations.monthPlural : translations.monthSingular
    }`;
  }

  return `${diffYears} ${
    diffYears > 1 ? translations.yearPlural : translations.yearSingular
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
