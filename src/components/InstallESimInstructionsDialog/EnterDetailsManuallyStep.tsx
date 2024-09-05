"use client";

import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type EnterDetailsManuallyStepProps = {
  step: number;
};

export const EnterDetailsManuallyStep = ({
  step,
}: EnterDetailsManuallyStepProps) => {
  const t = useTranslations("InstallESimInstructionsDialog");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("EnterDetailsManuallyStep_instruction_1_text")}</span>
          <IconWithText
            src={t("EnterDetailsManuallyStep_instruction_1_icon_src")}
            alt={t("EnterDetailsManuallyStep_instruction_1_icon_alt")}
            text={t("EnterDetailsManuallyStep_instruction_1_icon_text")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src={t("EnterDetailsManuallyStep_instruction_2_icon_src")}
            alt={t("EnterDetailsManuallyStep_instruction_2_icon_alt")}
            text={t("EnterDetailsManuallyStep_instruction_2_icon_text")}
          />
          <ArrowRightImage />
          <span>
            {t("EnterDetailsManuallyStep_instruction_2_additional_text")}
          </span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src={t("EnterDetailsManuallyStep_instruction_3_icon_src")}
            alt={t("EnterDetailsManuallyStep_instruction_3_icon_alt")}
            text={t("EnterDetailsManuallyStep_instruction_3_icon_text")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("EnterDetailsManuallyStep_final_step")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
