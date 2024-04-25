import { useTranslations } from "next-intl";


export default function Page() {
  const t = useTranslations("MainPage");
  return (
    <div>
      <header>
        <h1>Jet/Sim MAIN PAGE</h1>
        <button>Jet/Sim</button>
      </header>
      <div>
      <h3>{t("title")}</h3>
      <p>{t("subtitle")}</p>
      </div>
    </div>
  )
}