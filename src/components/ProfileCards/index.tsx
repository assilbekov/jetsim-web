"use client";
import { fetchLocation } from "@/api/locations";
import { PlanningTripCard } from "./PlanningTripCard";
import { ProfileCard } from "./ProfileCard";
import { fetchCards } from "@/api/cards";
import { useQuery } from "@tanstack/react-query";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { Card as CardModel, CardStatus } from "@/models/Card";
import { Dialog } from "../Dialog";
import { useState } from "react";
import { Location } from "@/models/Location";

enum ModalType {
  INSTALL = "install",
  DETAILS = "details",
  BUY_NEW_PLAN = "buy-new-plan",
}

type Modal = {
  type: ModalType;
  card: CardModel;
  location: Location;
};

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
  const [modal, setModal] = useState<Modal | null>(null);
  const { data: cards } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });
  const { data: locations } = useQuery({
    queryKey: ["cards", cards?.map((card) => card.id)],
    queryFn: async () => {
      const promiseAll = Promise.all(
        cards
          ?.filter((card) => card.placeID && card.lpaCode)
          .map((card) => fetchLocation(card.placeID)) || []
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

      return {
        card,
        location,
      };
    })
    .concat(mockCardsWithLocation);

  return (
    <LandingContainer>
      <Card>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardsWithLocation?.map(
            ({ card, location }) =>
              location && (
                <ProfileCard
                  key={card.id}
                  card={card}
                  location={location}
                  onBuyNewPlanClick={(card, location) =>
                    setModal({ type: ModalType.BUY_NEW_PLAN, card, location })
                  }
                  onDetailsClick={(card, location) =>
                    setModal({ type: ModalType.DETAILS, card, location })
                  }
                  onInstallClick={(card, location) =>
                    setModal({ type: ModalType.INSTALL, card, location })
                  }
                />
              )
          )}
          <PlanningTripCard />
        </div>
        {modal && (
          <Dialog onClose={() => setModal(null)}>
            {JSON.stringify(modal)}
          </Dialog>
        )}
      </Card>
    </LandingContainer>
  );
};
