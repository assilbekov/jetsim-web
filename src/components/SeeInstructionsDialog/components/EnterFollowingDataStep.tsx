import { Card } from "@/models/Card";
import { RoundedLabel } from "./RoundedLabel";
import { InfoRow } from "./InfoRow";
import { useDeviceTypeAndVersion } from "@/hooks/useDeviceTypeAndVersion";
import { CopyButton } from "@/components/buttons/CopyButton";
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
        <p className="text-text-600 mb-2">{label}</p>
        {text}
      </div>
      <CopyButton text={text} />
    </div>
  );
};

type EnterFollowingDataStepProps = {
  step: number;
  card: Card;
  isAndroid?: boolean;
};

export const EnterFollowingDataStep = ({
  step,
  card,
  isAndroid,
}: EnterFollowingDataStepProps) => {
  const t = useTranslations("SeeInstructions");
  const deviceTypeAndVerion = useDeviceTypeAndVersion();
  const { addr, activationCodeAndroid, activationCodeIOS } =
    convertLPACodeToBlocks(card.lpaCode);

  return (
    <div className="flex flex-col gap-4">
      <RoundedLabel>{step}</RoundedLabel>
      <InfoRow>
        <span>{t("enterData")}</span>
      </InfoRow>
      {deviceTypeAndVerion.isAndroid || isAndroid ? (
        <CopyBlock text={activationCodeAndroid} label={t("activationCode")} />
      ) : (
        <>
          <CopyBlock text={addr} label={t("smdpAddress")} />
          <CopyBlock text={activationCodeIOS} label={t("activationCode")} />
        </>
      )}
    </div>
  );
};
