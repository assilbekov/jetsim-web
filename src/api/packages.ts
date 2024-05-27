import { simServiceURL } from "@/config";
import { Package, PackageTagEnum } from "@/models/Package";

export const fetchPackages = async (
  placeId: string,
  tags: PackageTagEnum
): Promise<Package> => {
  const res = await fetch(
    `${simServiceURL}packages?placeID=${placeId}&tags=${tags}`
  );
  const json = await res.json();
  return json;
};
