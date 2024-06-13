"use client";
import { fetchLocation } from "@/api/locations";
import { PlanningTripCard } from "./PlanningTripCard";
import { ProfileCard } from "./ProfileCard";
import { fetchCards } from "@/api/cards";
import { useQuery } from "@tanstack/react-query";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { CardStatus } from "@/models/Card";
import { useState } from "react";
import { CardDialog, CardDialogModel, CardDialogType } from "./CardDialog";
import { fetchPackage } from "@/api/packages";

const mockCardsWithLocation = [
  {
    location: {
      title: "Georgia",
      coordinate: {
        lat: 55.378051,
        lng: -3.435973,
      },
      countryCode: "GE",
      bestCost: null,
      placeID: "georgia",
    },
    card: {
      id: "c4283bfa-72fa-471d-bebb-30a4975e325a",
      status: CardStatus.Paid,
      lpaCode: "LPA:1$smdp.io$K2-1VL1TC-RPOID9",
      activatedAt: "2024-06-06 21:08:01 +0000 UTC",
      expiresAt: "2024-06-16 21:08:01 +0000 UTC",
      trafficTotalBytes: 3221225472,
      trafficRemainingBytes: 3221225472,
      package: {
        id: "d64f19c9-cf5d-57cb-9be6-7de56a8e706a",
      },
      placeID: "georgia",
    },
  },
  {
    location: {
      title: "United Kingdom",
      coordinate: {
        lat: 55.378051,
        lng: -3.435973,
      },
      countryCode: "GB",
      bestCost: null,
      placeID: "united-kingdom",
    },
    card: {
      id: "c4283bfa-72fa-471d-bebb-30a4975e7e5a",
      status: CardStatus.Active,
      lpaCode: "LPA:1$smdp.io$K2-1VL1TC-RPOID9",
      activatedAt: "2024-06-06 21:08:01 +0000 UTC",
      expiresAt: "2024-06-16 21:08:01 +0000 UTC",
      trafficTotalBytes: 3221225472,
      trafficRemainingBytes: 2221225472,
      package: {
        id: "d64f19c9-cf5d-57cb-9be6-7de56a8e706a",
      },
      placeID: "united-kingdom",
    },
  },
  {
    location: {
      title: "Spain",
      coordinate: {
        lat: 40.46366700000001,
        lng: -3.74922,
      },
      countryCode: "ES",
      bestCost: null,
      placeID: "spain",
    },
    card: {
      id: "d4283bfa-72fa-471d-bebb-30a4971e7e5a",
      status: CardStatus.Active,
      lpaCode: "LPA:1$smdp.io$K2-1VL1TC-RPOID9",
      activatedAt: "2024-06-06 21:08:01 +0000 UTC",
      expiresAt: "2024-06-12 21:08:01 +0000 UTC",
      trafficTotalBytes: 3221225472,
      trafficRemainingBytes: 521225472,
      package: {
        id: "d64f19c9-cf5d-57cb-9be6-7de56a8e706a",
      },
      placeID: "united-kingdom",
    },
  },
  {
    location: {
      title: "France",
      coordinate: {
        lat: 46.227638,
        lng: 2.213749,
      },
      countryCode: "FR",
      bestCost: null,
      placeID: "france",
    },
    card: {
      id: "a4283bfa-72fa-471d-bebb-30a4975e735a",
      status: CardStatus.Expired,
      lpaCode: "LPA:1$smdp.io$K2-1VL1TC-RPOID9",
      activatedAt: "2024-06-06 21:08:01 +0000 UTC",
      expiresAt: "2022-03-13 21:08:01 +0000 UTC",
      trafficTotalBytes: 100,
      trafficRemainingBytes: 80,
      package: {
        id: "d64f19c9-cf5d-57cb-9be6-7de56a8e706a",
      },
      placeID: "france",
    },
  },
];

export const ProfileCards = () => {
  const [dialog, setDialog] = useState<CardDialogModel | null>(null);
  const { data: cards } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const resCards = await fetchCards();
      return resCards.concat(mockCardsWithLocation.map(({ card }) => card));
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

  const { data: locations } = useQuery({
    queryKey: ["locations", ...locationIds],
    queryFn: async () => {
      const promiseAll = Promise.all(
        locationIds.map((locationId) => fetchLocation(locationId)) || []
      );

      return await promiseAll;
    },
  });
  const { data: packages } = useQuery({
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

  return (
    <LandingContainer>
      <Card>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardsWithLocation?.map(
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
          )}
          <PlanningTripCard />
        </div>
        {dialog && (
          <CardDialog key={dialog.type} {...dialog} setDialog={setDialog} />
        )}
      </Card>
    </LandingContainer>
  );
};
