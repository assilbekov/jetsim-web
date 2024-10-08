import { simServiceURL } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";
import { Package, PackageResponse, PackageTagEnum } from "@/models/Package";

export const fetchPackages = async (
  placeId: string,
  tags: PackageTagEnum,
  locale: string
): Promise<PackageResponse> => {
  const res = await fetch(
    `${simServiceURL}packages?placeID=${placeId}&tags=${tags}`,
    {
      headers: {
        "Accept-Language": locale || "en-US",
      },
    }
  );
  const json: ApiResponse<PackageResponse> = await res.json();
  return json.payload;
};

export const fetchPackage = async (
  packageID: string,
  locale: string
): Promise<Package> => {
  const res = await fetch(`${simServiceURL}packages/${packageID}`, {
    headers: {
      "Accept-Language": locale || "en-US",
    },
  });
  const json: ApiResponse<Package> = await res.json();
  return json.payload;
};
