import { geoServiceURL } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";
import {
  DestinationsResponse,
  Location,
  LocationCover,
} from "@/models/Location";

export const fetchLocations = async (query: string, locale: string): Promise<Location[]> => {
  if (!query) {
    return [];
  }

  const res = await fetch(`${geoServiceURL}places/suggest?query=${query}`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  const json: ApiResponse<Location[]> = await res.json();
  return json.payload;
};

export const fetchTopCountries = async (
  limit: number,
  locale: string
): Promise<DestinationsResponse> => {
  const res = await fetch(
    `${geoServiceURL}places/lists/q/top-countries?limit=${limit}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    }
    //{ cache: "force-cache" }
  );
  const json: ApiResponse<DestinationsResponse> = await res.json();
  return json.payload;
};

export const fetchAllDestinations = async (
  locale: string
): Promise<Location[]> => {
  const res = await fetch(`${geoServiceURL}places/lists/q/top-countries`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  const json: ApiResponse<DestinationsResponse> = await res.json();
  return json.payload.data.sort((l1, l2) => (l1.title > l2.title ? 1 : -1));
};

export const fetchLocation = async (
  placeId: string,
  locale: string
): Promise<Location> => {
  const res = await fetch(`${geoServiceURL}places/${placeId}`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  const json: ApiResponse<Location> = await res.json();
  return json.payload;
};

export const fetchLocationCover = async (
  placeId: string
): Promise<LocationCover> => {
  const res = await fetch(`${geoServiceURL}places/${placeId}/cover`, {
    headers: {
      "Accept-Language": "en-US",
    },
  });
  const json: ApiResponse<LocationCover> = await res.json();
  return json.payload;
};
