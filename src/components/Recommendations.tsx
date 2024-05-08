import { useTranslations } from "next-intl";
import { Header, HeadersVariant } from "./Header";
import { LandingContainer } from "./LandingContainer";

export const Recommendations = () => {
  const t = useTranslations("MainPage");
  return (
    <LandingContainer>
      <Header variant={HeadersVariant.H2}>
        {t("where_do_you_want_to_go")}
      </Header>
      MOCK RECOMMENDATIONS FLOW
    </LandingContainer>
  );
};
