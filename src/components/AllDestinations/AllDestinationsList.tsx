import { fetchAllDestinations, fetchTopCountries } from "@/api/locations";
import { CountryCard } from "../CountryCard";

export const AllDestinationsList = async () => {
  const destinations = await fetchAllDestinations();

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 mt-6 sm:mt-8 lg:mt-10">
      {destinations.map((country) => (
        <CountryCard key={country.placeID} country={country} />
      ))}
    </div>
  );
};
