"use client";

import { fetchLocation, fetchLocationCover } from "@/api/locations";
import { useQuery } from "@tanstack/react-query";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import Image from "next/image";
import {
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "../Typography";
import { clsx } from "@/utils";
import { Package, PackageTagEnum } from "@/models/Package";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fetchPackages } from "@/api/packages";
import { mockPackages } from "./mockdata";
import { PackageOption } from "./PackageOption";
import { TagButton } from "./TagButton";
import { Skeleton } from "../Skeleton";
import "./styles.css";
import { useEffect, useState } from "react";
import { BackgroundImage } from "./BackgroundImage";

type PlacePackagesCardProps = {
  placeId: string;
  locale: string;
};

export const PlacePackagesCard = ({ placeId }: PlacePackagesCardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedPackageId, setSelectedPackageId] = useState<string>(() => {
    return searchParams.get("selectedPackage") ?? "";
  });
  const [selectedTag, setSelectedTag] = useState<PackageTagEnum>(() => {
    return (
      (searchParams.get("tags") as PackageTagEnum) ?? PackageTagEnum.UNLIMITED
    );
  });

  const locationQuery = useQuery({
    queryKey: ["place-packages", placeId],
    queryFn: async () => {
      const locs = await fetchLocation(placeId);
      return locs;
    },
    staleTime: 1000 * 60 * 5,
  });
  const locationCoverQuery = useQuery({
    queryKey: ["place-packages-cover", placeId],
    queryFn: async () => {
      return {
        id: placeId,
        url: "https://s3-alpha-sig.figma.com/img/2b0b/98c4/ff1d0ead5be44799a58319a0839f91eb?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WK6-nX4RqtaQ51KNGNBT1UWlvMVwBCXoWEJshc9YMnUirvE42ak~WcIYf9~vr0rRXa7u1gqQTRJb657VrAMrPrKWYi2Wh0bu5BOMqgYCYYgm8M14dD0Jqqx2xGcWK8SWFdH8De5HVHY6c6-rubtXNtdkMmTd2XiU7QrWLIXeGocCu4bR9kDEVaWtLzuVki-HXAwJy2K-Tgbt3AI4jspjWsoFMUWMI5R1raNdARy2VwNE56dW29V~ZNGXEQX8WhtUVS0QByqqvWEX8qrafml747ukQlEePYflNA-bQBbVe0~-Zd7vNcgjiMesP-TROssqK~zGx8o4auhfj4LBC-NNLw__",
      };
      return await fetchLocationCover(placeId);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const packagesUnlimitedQuery = useQuery({
    queryKey: ["place-packages", placeId, PackageTagEnum.STANDARD],
    queryFn: async () => {
      await fetchPackages(placeId, PackageTagEnum.STANDARD);
      return { data: mockPackages };
    },
    staleTime: 1000 * 60 * 5,
  });
  const packagesStandardQuery = useQuery({
    queryKey: ["place-packages", placeId, PackageTagEnum.UNLIMITED],
    queryFn: async () => {
      await fetchPackages(placeId, PackageTagEnum.UNLIMITED);
      return { data: mockPackages };
    },
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (selectedPackageId) return;

    setSelectedPackageId(
      (selectedTag === PackageTagEnum.STANDARD
        ? packagesStandardQuery.data?.data.find((p) => p.bestChoice)?.id
        : packagesUnlimitedQuery.data?.data.find((p) => p.bestChoice)?.id) ?? ""
    );
  }, [packagesUnlimitedQuery.data, packagesStandardQuery.data, selectedTag]);

  const packagesList =
    (searchParams.get("tags") === PackageTagEnum.STANDARD
      ? packagesStandardQuery.data?.data
      : packagesUnlimitedQuery.data?.data) ?? [];

  const handleTagChange = (tag: PackageTagEnum) => {
    setSelectedTag(tag);
    setSelectedPackageId("");

    const params = new URLSearchParams(searchParams.toString());
    params.set("tags", tag);
    params.delete("selectedPackage");

    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePackageChange = (_selectedPackage: Package) => {
    setSelectedPackageId(_selectedPackage.id);

    const params = new URLSearchParams(searchParams.toString());
    params.set("selectedPackage", _selectedPackage.id);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <LandingContainer className="md:flex">
      <Card className="flex gap-4 flex-col pt-0 pb-6 md:min-w-[494px] md:w-[494px] z-[1]">
        <div className="flex flex-col gap-1 xxs:gap-2">
          <div className="flex gap-1 xxs:gap-[10px] xs:gap-4 sm:gap-6 items-center">
            <h3
              className={clsx(
                matchTypographyMediaQuery({
                  default: TypographyVariants.Subheader,
                  xxs: TypographyVariants.H2,
                }),
                "w-full flex gap-2"
              )}
            >
              eSIM for{" "}
              {locationQuery.isFetched ? (
                locationQuery.data?.title
              ) : (
                <Skeleton className="min-w-40 xxs:min-w-40 rounded-lg" />
              )}
            </h3>
            {!locationQuery.isFetched ? (
              <Skeleton className="min-w-7 min-h-7 xxs:min-w-9 xxs:min-h-9 rounded-full" />
            ) : (
              <Image
                src={`https://hatscripts.github.io/circle-flags/flags/${locationQuery.data?.countryCode.toLowerCase()}.svg`}
                width={36}
                height={36}
                alt={`flag of ${locationQuery.data?.countryCode}`}
                className="w-7 h-7 xxs:w-9 xxs:h-9"
              />
            )}
          </div>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "text-text-600"
            )}
          >
            Unlimited and standard plans for travellers and remote workers
          </p>
        </div>
        <div>
          <TagButton
            active={selectedTag === PackageTagEnum.STANDARD}
            onClick={() => handleTagChange(PackageTagEnum.STANDARD)}
          >
            Standard
          </TagButton>
          <TagButton
            active={selectedTag === PackageTagEnum.UNLIMITED}
            onClick={() => handleTagChange(PackageTagEnum.UNLIMITED)}
          >
            Unlimited
          </TagButton>
        </div>
        <div className="flex flex-col gap-2 xxs:gap-3">
          {packagesStandardQuery.isLoading && packagesUnlimitedQuery.isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-20 rounded-xl" />
              ))
            : packagesList.map((packageEntity) => (
                <PackageOption
                  key={packageEntity.id}
                  tag={selectedTag}
                  packageEntity={packageEntity}
                  selected={selectedPackageId === packageEntity.id}
                  onSelect={handlePackageChange}
                />
              ))}
        </div>
        <div className="flex justify-between items-center w-full max-w-[397px] m-auto">
          <Image
            src="/icons/gray/paypal.svg"
            alt="paypal icon"
            width={80.1}
            height={19.8}
            className="w-[72px] h-[18px] xxs:w-[80.1] xxs:h-[19.8px]"
          />
          <Image
            src="/icons/gray/apple-pay.svg"
            alt="apple pay icon"
            width={49.09}
            height={23.1}
            className="w-[44.18px] h-[20.78px] xxs:w-[49.09] xxs:h-[23.1px]"
          />
          <Image
            src="/icons/gray/google-pay.svg"
            alt="google pay icon"
            width={47.7}
            height={19.8}
            className="w-[43px] h-[17.8px] xxs:w-[47.7] xxs:h-[19.8px]"
          />
          <Image
            src="/icons/gray/mastercard.svg"
            alt="mastercard icon"
            width={32.04}
            height={19.8}
            className="w-[28.8px] h-[17.8px] xxs:w-[32.04] xxs:h-[19.8px]"
          />
          <Image
            src="/icons/gray/visa.svg"
            alt="visa icon"
            width={43.8}
            height={14.85}
            className="w-[39.4px] h-[13.36px] xxs:w-[43.8] xxs:h-[14.85px]"
          />
        </div>
        <button
          className={clsx(
            "w-full py-3 xxs:py-4 px-8 bg-secondary-500 rounded-[32px] text-text-900 active:bg-secondary-300 hover:bg-secondary-700 transition duration-200 ease-in-out",
            getTypographyClass(TypographyVariants.Caption)
          )}
        >
          Go to checkout
        </button>
      </Card>
      <BackgroundImage
        url="/support-background.png"
        alt={`${placeId} cover image`}
      />
    </LandingContainer>
  );
};
