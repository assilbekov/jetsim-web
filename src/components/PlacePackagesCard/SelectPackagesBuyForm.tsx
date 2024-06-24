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
import Image from "next/image";
import { SecondaryButton } from "../buttons/SecondaryButton";
import Link from "next/link";

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

  const isStandardEmpty =
    packagesStandardQuery.isFetched && packagesStandardQuery.data?.length === 0;
  const isUnlimitedEmpty =
    packagesUnlimitedQuery.isFetched &&
    packagesUnlimitedQuery.data?.length === 0;

  useEffect(() => {
    if (!isStandardEmpty && isUnlimitedEmpty) {
      setSelectedTag(PackageTagEnum.STANDARD);
    }
  }, [isUnlimitedEmpty]);

  useEffect(() => {
    if (selectedPackageId) return;

    setSelectedPackageId(
      (selectedTag === PackageTagEnum.STANDARD
        ? packagesStandardQuery.data?.find((p) => p.bestChoice)?.id
        : packagesUnlimitedQuery.data?.find((p) => p.bestChoice)?.id) ?? ""
    );
  }, [packagesUnlimitedQuery.data, packagesStandardQuery.data, selectedTag]);

  const packagesList =
    (selectedTag === PackageTagEnum.STANDARD
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
    onSubmit(selectedPackageId);
  };

  if (isStandardEmpty && isUnlimitedEmpty) {
    return (
      <div className="flex flex-col gap-4 h-full justify-center">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/icons/primary/sentiment_sad.svg"
            alt="No packages available"
            width={48}
            height={48}
          />
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Subheader),
              "text-center"
            )}
          >
            There are no available data plans for Turkey at the moment
          </p>
        </div>
        <Link href="/all-destinations" className="text-center">
          <SecondaryButton>Choose another country</SecondaryButton>
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCheckout();
      }}
      className="flex flex-col gap-4"
    >
      {!(isStandardEmpty || isUnlimitedEmpty) && (
        <div className="flex gap-1">
          {packagesStandardQuery.isFetched ? (
            <TagButton
              type="button"
              active={selectedTag === PackageTagEnum.STANDARD}
              onClick={() => handleTagChange(PackageTagEnum.STANDARD)}
            >
              Standard
            </TagButton>
          ) : (
            <Skeleton className="w-28 h-11 rounded-xl" />
          )}
          {packagesUnlimitedQuery.isFetched ? (
            <TagButton
              type="button"
              active={selectedTag === PackageTagEnum.UNLIMITED}
              onClick={() => handleTagChange(PackageTagEnum.UNLIMITED)}
            >
              Unlimited
            </TagButton>
          ) : (
            <Skeleton className="w-28 h-11 rounded-xl" />
          )}
        </div>
      )}
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
      {selectedPackageId ? (
        <button
          className={clsx(
            "w-full py-3 xxs:py-4 px-8 bg-secondary-500 rounded-[32px] text-text-900 active:bg-secondary-300 hover:bg-secondary-700 transition duration-200 ease-in-out",
            getTypographyClass(TypographyVariants.Caption)
          )}
          type="submit"
        >
          Go to checkout
        </button>
      ) : (
        <Skeleton className="w-full h-12 rounded-xl" />
      )}
    </form>
  );
};
