import { geoServiceURL } from "@/config";
import { Location } from "@/models/Location";

export const fetchLocations = async (query: string): Promise<Location[]> => {
  if (!query) {
    return [];
  }

  const res = await fetch(`${geoServiceURL}places/suggest?query=${query}`);
  const json = await res.json();
  return json;
};
