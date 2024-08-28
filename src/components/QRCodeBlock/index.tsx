"use client";

import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { Card } from "@/models/Card";
import { clsx } from "@/utils";
import Image from "next/image";
import QRCode from "qrcode.react";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { SeeInstructionsButton } from "./SeeInstructionsButton";
import { ShareQRCodeButton } from "./ShareQRCodeButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { useTranslations } from "next-intl";

type QRCodeBlockProps = {
  size: number;
  card: Card;
  locale: string;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className={clsx(
        getTypographyClass(TypographyVariants.Subheader),
        "md:font-interTight md:text-[34px] md:leading-[38px] md:font-medium md:tracking-[0.68px]",
        "mt-6 mb-3 text-center"
      )}
    >
      {children}
    </p>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "md:font-inter md:text-xl md:leading-[26px] md:font-medium",
        "text-text-600 text-center"
      )}
    >
      {children}
    </p>
  );
};

const QRCodeElement = ({ url, size }: { url: string; size: number }) => {
  return (
    <div className="flex justify-center">
      <QRCode value={url} size={size} />
    </div>
  );
};

export const QRCodeBlock = ({ card, size, locale }: QRCodeBlockProps) => {
  const t = useTranslations("QRCodeBlock");
  const deviceTypeAndVerion = useDeviceTypeAndVerion();

  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${card.lpaCode}`;

  const renderQRCode = () => {
    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "17.5") {
      return (
        <div>
          <a href={url}>
            <QRCodeElement url={url} size={size} />
          </a>
          <div className="flex justify-center">
            <Image
              src="/icons/black/union.png"
              alt="union icon"
              height={52}
              width={37}
              className="mt-4"
            />
          </div>
          <Title>{t("titleIOS175")}</Title>
          <Description>{t("descriptionIOS175")}</Description>
          <a href={url} className="w-full">
            <PrimaryButton className="w-full mt-4">
              {t("installESIMButton")}
            </PrimaryButton>
          </a>
        </div>
      );
    }

    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "16.0") {
      return (
        <div>
          <QRCodeElement url={card.lpaCode} size={size} />
          <div className="flex justify-center">
            <Image
              src="/icons/black/union.png"
              alt="union icon"
              height={52}
              width={37}
              className="mt-4"
            />
          </div>
          <Title>{t("titleIOS16")}</Title>
          <Description>{t("descriptionIOS16")}</Description>
          <SeeInstructionsButton card={card} locale={locale} />
        </div>
      );
    }

    if (deviceTypeAndVerion.isIOS) {
      return (
        <div>
          <QRCodeElement url={card.lpaCode} size={size} />
          <Title>{t("titleIOSOther")}</Title>
          <Description>{t("descriptionIOSOther")}</Description>
          <ShareQRCodeButton />
          <SeeInstructionsButton card={card} locale={locale} />
        </div>
      );
    }

    if (deviceTypeAndVerion.isDesktop) {
      return (
        <div>
          <QRCodeElement url={card.lpaCode} size={size} />
          <Title>{t("titleDesktop")}</Title>
          <Description>{t("descriptionDesktop")}</Description>
          <SeeInstructionsButton card={card} locale={locale} />
        </div>
      );
    }

    return (
      <div>
        <QRCodeElement url={card.lpaCode} size={size} />
        <Title>{t("titleDefault")}</Title>
        <Description>{t("descriptionDefault")}</Description>
        <ShareQRCodeButton />
        <SeeInstructionsButton card={card} locale={locale} />
      </div>
    );
  };

  return <div>{renderQRCode()}</div>;
};
