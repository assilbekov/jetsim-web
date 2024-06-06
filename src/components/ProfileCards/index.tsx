"use client";
import { PlanningTripCard } from "./PlanningTripCard";
import { ProfileCard } from "./ProfileCard";
import { fetchCards } from "@/api/cards";
import { useQuery } from "@tanstack/react-query";

export const ProfileCards = () => {
  const { data: cards } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });

  return (
    <div>
      {cards
        ?.filter((card) => card.placeID && card.lpaCode)
        .splice(0, 2)
        .map((card) => (
          <ProfileCard key={card.id} card={card} />
        ))}
      <PlanningTripCard />
    </div>
  );
};
