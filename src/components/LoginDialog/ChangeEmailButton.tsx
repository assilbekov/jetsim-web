import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { useTranslations } from "next-intl";

export const ChangeEmailButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const t = useTranslations("LoginDialog");
  return (
    <button
      {...props}
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "text-secondary-500 hover:text-secondary-300 active:text-secondary-100 transition duration-100 ease-in-out",
        props.className ?? ""
      )}
    >
      {t("changeEmail")}
    </button>
  );
};
