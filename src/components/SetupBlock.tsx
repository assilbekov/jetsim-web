import { useTranslations } from "next-intl";
import { Header, HeadersVariant } from "./Header"


export const SetupBlock = () => {
  const t = useTranslations("MainPage");
  return (
    <div>
      <Header variant={HeadersVariant.H2}>
        {t("set_up_your_esim_in_1_minute")}
      </Header>
      <div className="mt-10">
        MOCK SetupBlock
      </div>
    </div>
  )
}