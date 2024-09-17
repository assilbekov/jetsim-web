"use client";

import { Card } from "@/models/Card";
import { CopyButton } from "../buttons/CopyButton";
import { RoundedLabel } from "./RoundedLabel";
import { InfoRow } from "./InfoRow";
import { useDeviceTypeAndVersion } from "@/hooks/useDeviceTypeAndVersion";
import { convertLPACodeToBlocks } from "@/utils";
import { useTranslations } from "next-intl";

type CopyBlockProps = {
  text: string;
  label: string;
};

const CopyBlock = ({ text, label }: CopyBlockProps) => {
  return (
    <div className="flex flex-col gap-4 items-center p-4 bg-white rounded-xl">
      <div>
        <p className="text-text-600">{label}</p>
        {text}
      </div>
      <CopyButton text={text} />
    </div>
  );
};

type EnterFollowingDataStepProps = {
  step: number;
  card: Card;
};

export const EnterFollowingDataStep = ({
  step,
  card,
}: EnterFollowingDataStepProps) => {
  const t = useTranslations("InstallESimInstructionsDialog");
  const deviceTypeAndVerion = useDeviceTypeAndVersion();

  const { addr, activationCodeAndroid, activationCodeIOS } =
    convertLPACodeToBlocks(card.lpaCode);

  return (
    <div className="flex flex-col gap-4">
      <RoundedLabel>{step}</RoundedLabel>
      <InfoRow>
        <span>{t("EnterFollowingDataStep_step_label")}</span>
      </InfoRow>
      {deviceTypeAndVerion.isAndroid ? (
        <CopyBlock
          text={activationCodeAndroid}
          label={t("EnterFollowingDataStep_copyblock_android_label")}
        />
      ) : (
        <>
          <CopyBlock
            text={addr}
            label={t("EnterFollowingDataStep_copyblock_ios_smdp_label")}
          />
          <CopyBlock
            text={activationCodeIOS}
            label={t("EnterFollowingDataStep_copyblock_ios_activation_label")}
          />
        </>
      )}
    </div>
  );
};
