"use client";

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
import { clsx, convertDateToISO, formatBytes } from "@/utils";
import { Package } from "@/models/Package";
import { convertCurrencyCodeToSymbol } from "@/convertCurrency";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SelectPackagesBuyForm } from "../PlacePackagesCard/SelectPackagesBuyForm";
import { useRouter } from "next/navigation";

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
    <div className="flex items-start gap-3">
      <div className="w-6 h-6">
        <Image src={src} alt={alt} width={24} height={24} className="w-6 h-6" />
      </div>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Body2),
          "mt-[2.5px]"
        )}
      >
        {content}
      </p>
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
      <InfoCard className="flex flex-col gap-3 pt-4 pb-4 pl-4 pr-4">
        <DetailsItem
          src="/icons/black/globe.svg"
          alt="globe icon"
          content={
            <>
              Data {formatBytes(card.trafficTotalBytes)}
              <p className="text-text-600 mt-1">
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
      <InfoCard className="flex flex-col gap-3 pt-4 pb-4 pl-4 pr-4">
        <DetailsItem
          src="/icons/black/shield.svg"
          alt="shield icon"
          content="No hidden fees, extra costs"
        />
        <DetailsItem
          src="/icons/black/no_calls.svg"
          alt="no calls icon"
          content="No calls and SMS, its only for data plan"
        />
        <DetailsItem
          src="/icons/black/cell_tower.svg"
          alt="cell tower icon"
          content="3G/4G/LTE/5G depends on the network"
        />
      </InfoCard>
      <PrimaryButton
        onClick={() =>
          setDialog({
            type: CardDialogType.BUY_NEW_PLAN,
            card,
            location,
            selectedPackage,
          })
        }
      >
        Buy new plan
      </PrimaryButton>
    </>
  );
};

const BuyNewPlanContent = ({ location, setDialog }: CardDialogProps) => {
  const router = useRouter();

  const handleCheckout = (selectedPackageId: string) => {
    const redirectUrl = `${window.location.origin}/en/payment?packageID=${selectedPackageId}&placeID=${location.placeID}`;
    router.push(redirectUrl);
  };

  return (
    <>
      <div>
        <DialogTitle
          onClose={() => setDialog(null)}
          title={`eSIM for ${location.title}`}
        />
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "text-text-600 pt-2 w-11/12"
          )}
        >
          Unlimited and standard plans for travellers and remote workers
        </p>
      </div>
      <SelectPackagesBuyForm
        placeId={location.placeID}
        infoContent={
          <ReinstallESim className="bg-[#EDFAFF] border-[#EDFAFF] my-1" />
        }
        onSubmit={handleCheckout}
        updateSearchParams={false}
      />
    </>
  );
};

export const CardDialog = (props: CardDialogProps) => {
  return (
    <Dialog onClose={() => props.setDialog(null)}>
      <div className="flex flex-col gap-5 w-full">
        {{
          [CardDialogType.INSTALL]: <InstallContent {...props} />,
          [CardDialogType.DETAILS]: <DetailsContent {...props} />,
          [CardDialogType.BUY_NEW_PLAN]: <BuyNewPlanContent {...props} />,
        }[props.type] || <></>}
      </div>
    </Dialog>
  );
};
