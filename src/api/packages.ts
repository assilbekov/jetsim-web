import { simServiceURL } from "@/config";
import { Package, PackageResponse, PackageTagEnum } from "@/models/Package";

export const fetchPackages = async (
  placeId: string,
  tags: PackageTagEnum
): Promise<PackageResponse> => {
  const res = await fetch(
    `${simServiceURL}packages?placeID=${placeId}&tags=${tags}`
  );
  const json = await res.json();
  return json;
};
