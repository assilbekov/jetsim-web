"use client";
import { fetchLocation } from "@/api/locations";
import { PlanningTripCard } from "./PlanningTripCard";
import { ProfileCard } from "./ProfileCard";
import { fetchCard, fetchCards } from "@/api/cards";
import { useQuery } from "@tanstack/react-query";

export const ProfileCards = () => {
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
    });

  return (
    <div>
      {cardsWithLocation
        ?.splice(0, 2)
        .map(
          ({ card, location }) =>
            location && (
              <ProfileCard key={card.id} card={card} location={location} />
            )
        )}
      <PlanningTripCard />
    </div>
  );
};
