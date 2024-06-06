import { PlanningTripCard } from "./PlanningTripCard";
import { ProfileCard } from "./ProfileCard";

export const ProfileCards = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <ProfileCard key={index} />
      ))}
      <PlanningTripCard />
    </div>
  );
};
