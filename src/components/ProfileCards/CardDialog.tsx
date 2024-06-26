"use client";

import { Card, CardStatus } from "@/models/Card";
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
import { convertPrice } from "@/converters/prices";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SelectPackagesBuyForm } from "../PlacePackagesCard/SelectPackagesBuyForm";
import { useRouter } from "next/navigation";
import { convertDaysText } from "@/converters/texts";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { TertiaryButton } from "../buttons/TertiaryButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCard } from "@/api/cards";

export enum CardDialogType {
  INSTALL = "install",
  DETAILS = "details",
  BUY_NEW_PLAN = "buy-new-plan",
  DELETE = "delete",
}

export type CardDialogModel = {
  type: CardDialogType;
  card: Card;
  location: Location;
  selectedPackage: Package;
};

type CardDialogProps = {
  setDialog: (model: CardDialogModel | null) => void;
  onSeeInstructionsClick: () => void;
} & CardDialogModel;

const InstallContent = ({
  card,
  setDialog,
  onSeeInstructionsClick,
}: CardDialogProps) => {
  return (
    <>
      <DialogTitle onClose={() => setDialog(null)} title="Install eSIM" />
      <ReinstallESim />
      <InstallESimToggle
        QRContent={
          <InfoCard>
            <QRCodeInstall
              card={card}
              onSeeInstructionsClick={onSeeInstructionsClick}
            />
          </InfoCard>
        }
        ManualContent={
          <InfoCard>
            <ManualInstall
              card={card}
              onSeeInstructionsClick={onSeeInstructionsClick}
            />
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
            selectedPackage.traffic.isUnlimited ? (
              "Unlimited data"
            ) : (
              <>
                Data {formatBytes(card.trafficTotalBytes)}
                <p className="text-text-600 mt-1">
                  {convertPrice(
                    selectedPackage.traffic.unit.costPerUnit.price,
                    selectedPackage.cost.currency
                  )}{" "}
                  / {selectedPackage.traffic.unit.label}
                </p>
              </>
            )
          }
        />
        <DetailsItem
          src="/icons/black/calendar_clock.svg"
          alt="calendar clock icon"
          content={convertDaysText(selectedPackage.days)}
        />
        <DetailsItem
          src="/icons/black/calendar_today.svg"
          alt="calendar today icon"
          content={`Purchased ${convertDateToISO(card.activatedAt)}`}
        />
        <DetailsItem
          src="/icons/black/wallet.svg"
          alt="Wallet icon"
          content={`Price ${convertPrice(
            selectedPackage.cost.price,
            selectedPackage.cost.currency
          )}`}
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
      <div className="flex flex-col gap-3 xxs:flex-row xxs:gap-4">
        {card.status === CardStatus.Expired && (
          <SecondaryButton
            className="w-full py-[14px] pr-1 pl-1"
            onClick={() =>
              setDialog({
                type: CardDialogType.DELETE,
                card,
                location,
                selectedPackage,
              })
            }
          >
            <div className="flex justify-center gap-2">
              <Image
                src="/icons/black/delete.svg"
                alt="delete icon"
                height={20}
                width={20}
              />
              Delete eSIM
            </div>
          </SecondaryButton>
        )}
        <PrimaryButton
          className="w-full pr-1 pl-1"
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
      </div>
    </>
  );
};

const BuyNewPlanContent = ({ location, setDialog }: CardDialogProps) => {
  const router = useRouter();

  const handleCheckout = (selectedPackageId: string) => {
    const redirectUrl = `${window.location.origin}/payment?packageID=${selectedPackageId}&placeID=${location.placeID}&reinstall=true`;
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
        location={location}
        onSubmit={handleCheckout}
        updateSearchParams={false}
      />
    </>
  );
};

const DeleteContent = ({ card, location, setDialog }: CardDialogProps) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteCard,
    onSuccess: () => {
      setDialog(null);
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });

  return (
    <div>
      <h5 className={getTypographyClass(TypographyVariants.Body2)}>
        Delete eSIM?
      </h5>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Body2),
          "text-text-600 mt-2"
        )}
      >
        It will remove it from the history
      </p>
      <div className="flex gap-1 justify-end mt-8">
        <TertiaryButton onClick={() => setDialog(null)}>
          <span>Cancel</span>
        </TertiaryButton>
        <TertiaryButton>
          <span className="text-secondary-500" onClick={() => mutate(card.id)}>
            Confirm
          </span>
        </TertiaryButton>
      </div>
    </div>
  );
};

export const CardDialog = (props: CardDialogProps) => {
  return (
    <Dialog
      onClose={() => props.setDialog(null)}
      dialogClassName={
        props.type === CardDialogType.DETAILS
          ? "md:h-auto md:h-max-auto md:h-fit md:mt-[80px]"
          : props.type === CardDialogType.DELETE
          ? "md:h-auto md:h-max-auto md:h-fit md:mt-[35vh]"
          : ""
      }
      dialogContentClassName={
        props.type === CardDialogType.DETAILS ||
        props.type === CardDialogType.DELETE
          ? "md:h-auto"
          : ""
      }
    >
      <div className="flex flex-col gap-5 w-full">
        {{
          [CardDialogType.INSTALL]: <InstallContent {...props} />,
          [CardDialogType.DETAILS]: <DetailsContent {...props} />,
          [CardDialogType.BUY_NEW_PLAN]: <BuyNewPlanContent {...props} />,
          [CardDialogType.DELETE]: <DeleteContent {...props} />,
        }[props.type] || <></>}
      </div>
    </Dialog>
  );
};
