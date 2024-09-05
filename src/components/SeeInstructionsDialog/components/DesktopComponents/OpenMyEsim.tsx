import { RoundedLabel } from "../RoundedLabel";
import { InfoRow } from "../InfoRow";
import { CopyButton } from "@/components/buttons/CopyButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

type CopyBlockProps = {
  text: string;
  label: string;
};

const CopyBlock = ({ text, label }: CopyBlockProps) => {
  const t = useTranslations("DesktopInstructions");

  return (
    <div className="flex flex-col gap-4 items-center p-4 bg-white rounded-xl">
      <div>
        <p className="text-text-600 mb-2">{t(label)}</p>
        <Link href={text}>{text}</Link>
      </div>
      <CopyButton text={text} />
    </div>
  );
};

type OpenMyEsimProps = {
  step: number;
  locale: string;
};

export const OpenMyEsim = ({ step }: OpenMyEsimProps) => {
  const t = useTranslations("DesktopInstructions");

  return (
    <div className="flex flex-col gap-4">
      <RoundedLabel>{step}</RoundedLabel>
      <InfoRow>
        <span>{t("openEsimPage")}</span>
      </InfoRow>
      <CopyBlock
        text="https://www.jetsim.app/profile"
        label={t("smdpAddressLabel")}
      />
    </div>
  );
};
