import { geoServiceURL } from "@/config";
import {
  DestinationsResponse,
  Location,
  LocationCover,
} from "@/models/Location";

export const fetchLocations = async (query: string): Promise<Location[]> => {
  if (!query) {
    return [];
  }

  const res = await fetch(`${geoServiceURL}places/suggest?query=${query}`);
  const json = await res.json();
  return json;
};

export const fetchTopCountries = async (
  limit: number
): Promise<DestinationsResponse> => {
  const res = await fetch(
    `${geoServiceURL}places/lists/q/top-countries?limit=${limit}`
  );
  const json = await res.json();
  return json;
};

export const fetchAllDestinations = async (): Promise<Location[]> => {
  const res = await fetch(`${geoServiceURL}places/lists/q/top-countries`);
  const json: DestinationsResponse = await res.json();
  return json.data.sort((l1, l2) => (l1.title > l2.title ? 1 : -1));
};

export const fetchLocation = async (placeId: string): Promise<Location> => {
  const res = await fetch(`${geoServiceURL}places/${placeId}`);
  const json = await res.json();
  return json;
};

export const fetchLocationCover = async (
  placeId: string
): Promise<LocationCover> => {
  const res = await fetch(`${geoServiceURL}places/${placeId}/cover`);
  const json = await res.json();
  return json;
};
