"use client";
import { fetchLocation } from "@/api/locations";
import { PlanningTripCard } from "./PlanningTripCard";
import { ProfileCard } from "./ProfileCard";
import { fetchCards } from "@/api/cards";
import { useQuery } from "@tanstack/react-query";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { useState } from "react";
import { CardDialog, CardDialogModel, CardDialogType } from "./CardDialog";
import { fetchPackage } from "@/api/packages";
import { SkeletonCard } from "./SkeletonCard";
import { InstallESimInstructionsDialog } from "../InstallESimInstructionsDialog";
import {
  handleProfileBuyClickEvent,
  handleProfileInstallClickEvent,
  handleSuccessPaymentInstructionClick,
} from "@/gtm-events";
import { MockCards } from "./mockCards";

export const ProfileCards = ({ locale }: { locale: string }) => {
  const [dialog, setDialog] = useState<CardDialogModel | null>(null);
  const [instructionsDialog, setInstructionsDialog] =
    useState<CardDialogModel | null>(null);
  const { data: cards, isFetched: isCardsFetched } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      return await fetchCards();
      //const cardsRes = await fetchCards();
      //return MockCards//.concat(cardsRes);
    },
  });

  const locationIds = Object.keys(
    cards?.reduce((res: Record<string, boolean>, card) => {
      if (card.placeID) {
        res[card.placeID] = true;
      }
      return res;
    }, {}) || {}
  );
  const packageIds = Object.keys(
    cards?.reduce((res: Record<string, boolean>, card) => {
      if (card.package.id) {
        res[card.package.id] = true;
      }
      return res;
    }, {}) || {}
  );

  const { data: locations, isFetched: isLocationsFetched } = useQuery({
    queryKey: ["locations", ...locationIds],
    queryFn: async () => {
      const promiseAll = Promise.all(
        locationIds.map((locationId) => fetchLocation(locationId, locale)) || []
      );

      return await promiseAll;
    },
  });
  const { data: packages, isFetched: isPackagesFetched } = useQuery({
    queryKey: ["packages", ...packageIds],
    queryFn: async () => {
      const promiseAll = Promise.all(
        packageIds.map((packageId) => fetchPackage(packageId)) || []
      );

      return await promiseAll;
    },
  });

  const cardsWithLocation = cards
    ?.filter((card) => card.placeID && card.lpaCode)
    .map((card) => {
      const location = locations?.find(
        (location) => location.placeID === card.placeID
      );
      const selectedPackage = packages?.find((p) => p.id === card.package.id);

      return {
        card,
        location,
        selectedPackage,
      };
    });

  const isCardsLoaded =
    isCardsFetched && isLocationsFetched && isPackagesFetched;

  return (
    <LandingContainer>
      <Card>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isCardsLoaded ? (
            cardsWithLocation?.map(
              ({ card, location, selectedPackage }) =>
                card &&
                location &&
                selectedPackage && (
                  <ProfileCard
                    key={card.id}
                    card={card}
                    location={location}
                    selectedPackage={selectedPackage}
                    onBuyNewPlanClick={(card, location) => {
                      handleProfileBuyClickEvent();
                      setDialog({
                        type: CardDialogType.BUY_NEW_PLAN,
                        card,
                        location,
                        selectedPackage,
                      });
                    }}
                    onDetailsClick={(card, location) =>
                      setDialog({
                        type: CardDialogType.DETAILS,
                        card,
                        location,
                        selectedPackage,
                      })
                    }
                    onInstallClick={(card, location) => {
                      handleProfileInstallClickEvent();
                      setDialog({
                        type: CardDialogType.INSTALL,
                        card,
                        location,
                        selectedPackage,
                      });
                    }}
                  />
                )
            )
          ) : (
            <SkeletonCard />
          )}

          <PlanningTripCard />
        </div>
        {dialog && (
          <CardDialog
            key={dialog.type}
            {...dialog}
            setDialog={setDialog}
            onSeeInstructionsClick={() => {
              handleSuccessPaymentInstructionClick();
              setInstructionsDialog({
                type: CardDialogType.INSTALL,
                card: dialog.card,
                location: dialog.location,
                selectedPackage: dialog.selectedPackage,
              });
              setDialog(null);
            }}
          />
        )}
        {instructionsDialog && (
          <InstallESimInstructionsDialog
            key={instructionsDialog.type}
            card={instructionsDialog.card}
            onClose={() => setInstructionsDialog(null)}
          />
        )}
        {/* {cards?.[3] && <InstallESimInstructionsDialog card={cards[3]} />} */}
      </Card>
    </LandingContainer>
  );
};
