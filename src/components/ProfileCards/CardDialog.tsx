import { Card } from "@/models/Card";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { ReinstallESim } from "../InstallESim/ReinstallESim";
import { InstallESimToggle } from "../InstallESim/InstallESimToggle";
import { InfoCard } from "./InfoCard";
import { QRCodeInstall } from "../InstallESim/QRCodeInstall";
import { ManualInstall } from "../InstallESim/ManualInstall";
import { BeforeInstallationContent } from "../InstallESim/BeforeInstallation";
import { Location } from "@/models/Location";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { convertDateToISO, formatBytes } from "@/utils";
import { Package } from "@/models/Package";
import { convertCurrencyCodeToSymbol } from "@/convertCurrency";

export enum CardDialogType {
  INSTALL = "install",
  DETAILS = "details",
  BUY_NEW_PLAN = "buy-new-plan",
}

export type CardDialogModel = {
  type: CardDialogType;
  card: Card;
  location: Location;
  selectedPackage: Package;
};

type CardDialogProps = {
  setDialog: (model: CardDialogModel | null) => void;
} & CardDialogModel;

const InstallContent = ({ card, setDialog }: CardDialogProps) => {
  return (
    <>
      <DialogTitle onClose={() => setDialog(null)} title="Install eSIM" />
      <ReinstallESim />
      <InstallESimToggle
        QRContent={
          <InfoCard>
            <QRCodeInstall card={card} />
          </InfoCard>
        }
        ManualContent={
          <InfoCard>
            <ManualInstall card={card} />
          </InfoCard>
        }
      />
      <InfoCard>
        <BeforeInstallationContent />
      </InfoCard>
    </>
  );
};

const DetailsItem = ({
  src,
  alt,
  content,
}: {
  src: string;
  alt: string;
  content: React.ReactNode;
}) => {
  return (
    <div>
      <Image src={src} alt={alt} width={24} height={24} className="w-6 h-6" />
      <p className={getTypographyClass(TypographyVariants.Body2)}>{content}</p>
    </div>
  );
};

const DetailsContent = ({
  card,
  location,
  setDialog,
  selectedPackage,
}: CardDialogProps) => {
  return (
    <>
      <DialogTitle
        onClose={() => setDialog(null)}
        title={`eSIM for ${location.title}`}
      />
      <InfoCard>
        <DetailsItem
          src="/icons/black/globe.svg"
          alt="globe icon"
          content={
            <>
              Data {formatBytes(card.trafficTotalBytes)}
              <p>
                {convertCurrencyCodeToSymbol(selectedPackage.cost.currency)}
                {selectedPackage.traffic.unit.costPerUnit.price} /{" "}
                {selectedPackage.traffic.unit.label}
              </p>
            </>
          }
        />
        <DetailsItem
          src="/icons/black/calendar_clock.svg"
          alt="calendar clock icon"
          content={`${selectedPackage.days} days`}
        />
        <DetailsItem
          src="/icons/black/calendar_today.svg"
          alt="calendar today icon"
          content={`Purchased ${convertDateToISO(card.activatedAt)}`}
        />
        <DetailsItem
          src="/icons/black/wallet.svg"
          alt="Wallet icon"
          content={`Price ${convertCurrencyCodeToSymbol(
            selectedPackage.cost.currency
          )}${selectedPackage.cost.price}`}
        />
      </InfoCard>
      <ReinstallESim />
      <InstallESimToggle
        QRContent={
          <InfoCard>
            <QRCodeInstall card={card} />
          </InfoCard>
        }
        ManualContent={
          <InfoCard>
            <ManualInstall card={card} />
          </InfoCard>
        }
      />
      <InfoCard>
        <BeforeInstallationContent />
      </InfoCard>
    </>
  );
};

const BuyNewPlanContent = ({ card, location, setDialog }: CardDialogProps) => {
  return (
    <>
      <DialogTitle
        onClose={() => setDialog(null)}
        title={`eSIM for ${location.title}`}
      />
      <ReinstallESim />
      <InstallESimToggle
        QRContent={
          <InfoCard>
            <QRCodeInstall card={card} />
          </InfoCard>
        }
        ManualContent={
          <InfoCard>
            <ManualInstall card={card} />
          </InfoCard>
        }
      />
      <InfoCard>
        <BeforeInstallationContent />
      </InfoCard>
    </>
  );
};

export const CardDialog = (props: CardDialogProps) => {
  return (
    <Dialog onClose={() => props.setDialog(null)}>
      <div className="flex flex-col gap-5">
        {{
          [CardDialogType.INSTALL]: <InstallContent {...props} />,
          [CardDialogType.DETAILS]: <DetailsContent {...props} />,
          [CardDialogType.BUY_NEW_PLAN]: <BuyNewPlanContent {...props} />,
        }[props.type] || <></>}
      </div>
    </Dialog>
  );
};
