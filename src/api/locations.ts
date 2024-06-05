import { geoServiceURL } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";
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
  const json: ApiResponse<Location[]> = await res.json();
  return json.payload;
};

export const fetchTopCountries = async (
  limit: number
): Promise<DestinationsResponse> => {
  const res = await fetch(
    `${geoServiceURL}places/lists/q/top-countries?limit=${limit}`
  );
  const json: ApiResponse<DestinationsResponse> = await res.json();
  console.log(json);
  return json.payload;
};

export const fetchAllDestinations = async (): Promise<Location[]> => {
  const res = await fetch(`${geoServiceURL}places/lists/q/top-countries`);
  const json: ApiResponse<DestinationsResponse> = await res.json();
  return json.payload.data.sort((l1, l2) => (l1.title > l2.title ? 1 : -1));
};

export const fetchLocation = async (placeId: string): Promise<Location> => {
  const res = await fetch(`${geoServiceURL}places/${placeId}`);
  const json: ApiResponse<Location> = await res.json();
  return json.payload;
};

export const fetchLocationCover = async (
  placeId: string
): Promise<LocationCover> => {
  const res = await fetch(`${geoServiceURL}places/${placeId}/cover`);
  const json: ApiResponse<LocationCover> = await res.json();
  return json.payload;
};
