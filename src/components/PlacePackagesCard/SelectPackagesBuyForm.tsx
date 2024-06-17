"use client";

import { useQuery } from "@tanstack/react-query";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx } from "@/utils";
import { Package, PackageTagEnum } from "@/models/Package";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fetchPackages } from "@/api/packages";
import { PackageOption } from "./PackageOption";
import { TagButton } from "./TagButton";
import { Skeleton } from "../Skeleton";
import "./styles.css";
import { useEffect, useState } from "react";

type SelectPackagesBuyFormProps = {
  placeId: string;
  updateSearchParams: boolean;
  infoContent: React.ReactNode;
  onSubmit: (selectedPackageId: string) => void;
};

export const SelectPackagesBuyForm = ({
  placeId,
  onSubmit,
  infoContent,
  updateSearchParams,
}: SelectPackagesBuyFormProps) => {
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

  const packagesUnlimitedQuery = useQuery({
    queryKey: ["place-packages", placeId, PackageTagEnum.UNLIMITED],
    queryFn: async () => {
      return await fetchPackages(placeId, PackageTagEnum.UNLIMITED);
    },
    staleTime: 1000 * 60 * 5,
  });
  const packagesStandardQuery = useQuery({
    queryKey: ["place-packages", placeId, PackageTagEnum.STANDARD],
    queryFn: async () => {
      return await fetchPackages(placeId, PackageTagEnum.STANDARD);
    },
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (selectedPackageId) return;

    setSelectedPackageId(
      (selectedTag === PackageTagEnum.STANDARD
        ? packagesStandardQuery.data?.find((p) => p.bestChoice)?.id
        : packagesUnlimitedQuery.data?.find((p) => p.bestChoice)?.id) ?? ""
    );
  }, [packagesUnlimitedQuery.data, packagesStandardQuery.data, selectedTag]);

  const packagesList =
    (searchParams.get("tags") === PackageTagEnum.STANDARD
      ? packagesStandardQuery.data
      : packagesUnlimitedQuery.data) ?? [];

  const handleTagChange = (tag: PackageTagEnum) => {
    if (tag === selectedTag) return;

    setSelectedTag(tag);
    setSelectedPackageId("");

    if (!updateSearchParams) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("tags", tag);
    params.delete("selectedPackage");

    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePackageChange = (_selectedPackage: Package) => {
    if (_selectedPackage.id === selectedPackageId) return;

    setSelectedPackageId(_selectedPackage.id);

    if (!updateSearchParams) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("selectedPackage", _selectedPackage.id);

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleCheckout = () => {
    const mockPackageID = "d64f19c9-cf5d-57cb-9be6-7de56a8e706a";
    onSubmit(mockPackageID);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCheckout();
      }}
      className="flex flex-col gap-4"
    >
      <div>
        <TagButton
          type="button"
          active={selectedTag === PackageTagEnum.STANDARD}
          onClick={() => handleTagChange(PackageTagEnum.STANDARD)}
        >
          Standard
        </TagButton>
        <TagButton
          type="button"
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
      {infoContent}
      <button
        className={clsx(
          "w-full py-3 xxs:py-4 px-8 bg-secondary-500 rounded-[32px] text-text-900 active:bg-secondary-300 hover:bg-secondary-700 transition duration-200 ease-in-out",
          getTypographyClass(TypographyVariants.Caption)
        )}
        type="submit"
      >
        Go to checkout
      </button>
    </form>
  );
};
