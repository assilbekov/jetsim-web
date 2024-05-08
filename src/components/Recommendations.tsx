import { useTranslations } from "next-intl";
import { Header, HeadersVariant } from "./Header";

export const Recommendations = () => {
  const t = useTranslations("MainPage");
  return (
    <div>
      <Header variant={HeadersVariant.H2}>
        {t("where_do_you_want_to_go")}
      </Header>
      MOCK RECOMMENDATIONS FLOW
    </div>
  );
};
