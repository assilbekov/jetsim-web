import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import { fetchTopCountries } from "@/api/locations";
import { Link } from "@/navigation";
import NextLink from "next/link";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className={getTypographyClass(TypographyVariants.Body)}>{children}</h5>
  );
};

// TOOD: Make list element a link
const ListElement = ({
  children,
  href,
  ...restProps
}: {
  children: React.ReactNode;
  href?: string;
  locale?: string;
}) => {
  return (
    <li
      className={clsx(
        "text-text-600 hover:text-text-300 transition duration-200 ease-in-out",
        getTypographyClass(TypographyVariants.Caption)
      )}
    >
      <Link href={href || "#"} {...(restProps as any)}>
        {children}
      </Link>
    </li>
  );
};

const ListBlock = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col gap-3">{children}</ul>;
};

const LinksBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 w-full lg:min-w-[240px]">
      {children}
    </div>
  );
};

const AddressBlock = ({ className }: { className?: string }) => {
  const t = useTranslations("Footer");
  return (
    <p
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "text-text-600 w-full",
        className ?? ""
      )}
    >
      <p>{t("company_name")}</p>
      <p>{t("company_address")}</p>
      <p>{t("company_number")}</p>
    </p>
  );
};

const TopCountries = async () => {
  const locale = useLocale();
  const topCountriesRes = await fetchTopCountries(6, locale);
  return (
    <ListBlock>
      {topCountriesRes.data.splice(0, 5).map((country) => (
        <ListElement key={country.placeID} href={`/places/${country.placeID}`}>
          {country.title}
        </ListElement>
      ))}
    </ListBlock>
  );
};

type LandingFooterProps = {
  containerClassName?: string;
  cardClassName?: string;
  locale: string;
};

// Refactor this. Delete code duplication.
const languagesList = [
  {
    country: "United States",
    language: "English",
    code: "en-US",
  },
  {
    country: "France",
    language: "Français",
    code: "fr-FR",
  },
  {
    country: "Deutschland",
    language: "Deutsch",
    code: "de-DE",
  },
  {
    country: "Polska",
    language: "Polski",
    code: "pl-PL",
  },
  {
    country: "Portugal",
    language: "Português",
    code: "pt-PT",
  },
  {
    country: "Србија",
    language: "Српски",
    code: "sr-RS",
  },
  {
    country: "España",
    language: "Español",
    code: "es-ES",
  },
  {
    country: "Italia",
    language: "Italiano",
    code: "it-IT",
  },
  {
    country: "Türkiye",
    language: "Türkçe",
    code: "tr-TR",
  },
];

export const LandingFooterContent = ({
  cardClassName,
  locale,
}: LandingFooterProps) => {
  const t = useTranslations("Footer");

  return (
    <Card size="lg" className={clsx("sm:py-8", cardClassName ?? "")}>
      <div className="flex gap-8 flex-col lg:flex-row lg:justify-between">
        <div className="w-full flex flex-col justify-between gap-6 sm:gap-8">
          <Image src="/logo.svg" alt="logo image" width={155} height={36} />
          <AddressBlock />
          <div className="bg-[#E9F0F2] w-full h-0.5" />
          <a href="https://apps.apple.com/app/id6504028637" target="_blank">
            <Image
              src="/images/download-ios-app.svg"
              alt="Download iOS app"
              width={154}
              height={50}
            />
          </a>
        </div>
        <div className="flex gap-8 flex-col sm:flex-row">
          <LinksBlock>
            <Title>{t("top_destinations")}</Title>
            <TopCountries />
          </LinksBlock>
          <LinksBlock>
            <Title>{t("legal")}</Title>
            <ListBlock>
              <ListElement href="/privacy-policy">
                {t("privacy_policy")}
              </ListElement>
              <ListElement href="/terms-of-service">
                {t("terms_of_service")}
              </ListElement>
            </ListBlock>
          </LinksBlock>
          <LinksBlock>
            <Title>{t("language")}</Title>
            <ListBlock>
              {languagesList.map((l) => (
                <li
                  key={l.code}
                  className={clsx(
                    "text-text-600 hover:text-text-300 transition duration-200 ease-in-out",
                    getTypographyClass(TypographyVariants.Caption)
                  )}
                >
                  <NextLink href={`/${l.code}`}>{l.language}</NextLink>
                </li>
              ))}
            </ListBlock>
          </LinksBlock>
          {/* <AddressBlock className="lg:hidden" /> */}
        </div>
      </div>
    </Card>
  );
};

export const LandingFooter = ({
  locale,
  cardClassName,
  containerClassName,
}: LandingFooterProps) => {
  return (
    <LandingContainer
      className={clsx(
        "border-t border-[#E6EFF2] sm:border-none",
        containerClassName ?? ""
      )}
    >
      <LandingFooterContent cardClassName={cardClassName} locale={locale} />
    </LandingContainer>
  );
};
