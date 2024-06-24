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
import { CardStatus } from "@/models/Card";

const MockCards = [
  {
    id: "6e9fc000-80fa-4d57-b458-d9127aeedf21",
    status: CardStatus.ReadyToInstall,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: "2024-06-24 16:04:31 +0000 UTC",
    expiresAt: "2024-07-09 16:04:31 +0000 UTC",
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "5ae1b16b-7b69-5903-8c4f-75b59a4a80da",
      traffic: {
        isUnlimited: true,
      },
    },
    placeID: "mexico",
  },
  {
    id: "debb0741-55bb-4713-967b-5434dbc31f34",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: "2024-06-24 16:04:31 +0000 UTC",
    expiresAt: "2024-07-09 16:04:31 +0000 UTC",
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "860a2144-35c2-5ec6-bcf6-7f491503f881",
      traffic: {
        isUnlimited: true,
      },
    },
    placeID: "united-states",
  },
  {
    id: "debb0741-55bb-4713-267b-5434dbc39f34",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: "2024-06-24 16:04:31 +0000 UTC",
    expiresAt: "2024-07-09 16:04:31 +0000 UTC",
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 17580963840,
    package: {
      id: "ce1fd811-0cfe-5ba7-9433-2b276806c3e5",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "turkiye",
  },
  {
    id: "debb0741-55bb-4713-957b-5434dbc39f34",
    status: CardStatus.Expired,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: "2024-06-14 16:04:31 +0000 UTC",
    expiresAt: "2024-06-19 16:04:31 +0000 UTC",
    trafficTotalBytes: 27580963840,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "de0b2cdd-1e58-5f05-b471-34b609538b7d",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "albania",
  },
  {
    id: "debb0741-55bb-4713-966b-5434dbc39f34",
    status: CardStatus.Expired,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: "2024-06-14 16:04:31 +0000 UTC",
    expiresAt: "2024-06-19 16:04:31 +0000 UTC",
    trafficTotalBytes: 0,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "b59e0699-4090-52ed-85fe-8622f7acc3ef",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "united-kingdom",
  },
  {
    id: "debb0741-25bb-4713-967b-5434dbc39f34",
    status: CardStatus.Expired,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: "2024-06-14 16:04:31 +0000 UTC",
    expiresAt: "2024-06-19 16:04:31 +0000 UTC",
    trafficTotalBytes: 0,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "1b572a55-5435-5b24-8675-315eced6537c",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "united-arab-emirates",
  },
];

export const ProfileCards = () => {
  const [dialog, setDialog] = useState<CardDialogModel | null>(null);
  const { data: cards, isFetched: isCardsFetched } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const cardsRes = await fetchCards();
      return MockCards;
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
        locationIds.map((locationId) => fetchLocation(locationId)) || []
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
                    onBuyNewPlanClick={(card, location) =>
                      setDialog({
                        type: CardDialogType.BUY_NEW_PLAN,
                        card,
                        location,
                        selectedPackage,
                      })
                    }
                    onDetailsClick={(card, location) =>
                      setDialog({
                        type: CardDialogType.DETAILS,
                        card,
                        location,
                        selectedPackage,
                      })
                    }
                    onInstallClick={(card, location) =>
                      setDialog({
                        type: CardDialogType.INSTALL,
                        card,
                        location,
                        selectedPackage,
                      })
                    }
                  />
                )
            )
          ) : (
            <SkeletonCard />
          )}

          <PlanningTripCard />
        </div>
        {dialog && (
          <CardDialog key={dialog.type} {...dialog} setDialog={setDialog} />
        )}
        {/* {cards?.[3] && <InstallESimInstructionsDialog card={cards[3]} />} */}
      </Card>
    </LandingContainer>
  );
};
