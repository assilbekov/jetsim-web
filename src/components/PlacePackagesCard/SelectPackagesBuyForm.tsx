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
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { Location } from "@/models/Location";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { handleCheckoutClickEvent } from "@/gtm-events";

type SelectPackagesBuyFormProps = {
  placeId: string;
  updateSearchParams: boolean;
  location?: Location;
  infoContent: React.ReactNode;
  onSubmit: (selectedPackageId: string) => void;
};

function findHighestPricePerUnit(
  packages: Package[],
  tag: PackageTagEnum
): number {
  return packages.reduce((maxPrice, pkg) => {
    const pricePerUnit =
      tag === PackageTagEnum.STANDARD
        ? pkg.cost.price / pkg.traffic.unit.count
        : pkg.cost.price / pkg.days;
    return Math.max(maxPrice, pricePerUnit);
  }, 0);
}

function calculatePackageDiscount(
  packageEntity: Package,
  highestPricePerUnit: number,
  tag: PackageTagEnum
): number {
  const packagePricePerUnit =
    tag === PackageTagEnum.STANDARD
      ? packageEntity.cost.price / packageEntity.traffic.unit.count
      : packageEntity.cost.price / packageEntity.days;
  packageEntity.traffic.unit.count || packageEntity.days;
  const discountPercentage =
    ((highestPricePerUnit - packagePricePerUnit) / highestPricePerUnit) * 100;
  return Number(discountPercentage.toFixed(0));
}

export const SelectPackagesBuyForm = ({
  placeId,
  location,
  onSubmit,
  infoContent,
  updateSearchParams,
}: SelectPackagesBuyFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations("PlacePackagesCard");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isSticky, setIsSticky] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string>(() => {
    return searchParams.get("selectedPackage") ?? "";
  });
  const [selectedTag, setSelectedTag] = useState<PackageTagEnum>(() => {
    return (
      (searchParams.get("tags") as PackageTagEnum) ?? PackageTagEnum.STANDARD
    );
  });



  console.log({ tags: searchParams.get("tags"), selectedTag });

  const handleScroll = () => {
    const parent = formRef.current;
    if (!parent) return;

    const parentBottom = parent.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    if (windowWidth > 980) {
      setIsSticky(false);
      return;
    }

    setIsSticky(parentBottom >= windowHeight || parentBottom <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!selectedPackageId) return;

    handleScroll();
  }, [selectedPackageId]);

  const packagesUnlimitedQuery = useQuery({
    queryKey: ["place-packages", placeId, PackageTagEnum.UNLIMITED],
    queryFn: async () => {
      return await fetchPackages(placeId, PackageTagEnum.UNLIMITED, locale);
    },
    staleTime: 1000 * 60 * 5,
  });
  const packagesStandardQuery = useQuery({
    queryKey: ["place-packages", placeId, PackageTagEnum.STANDARD],
    queryFn: async () => {
      return await fetchPackages(placeId, PackageTagEnum.STANDARD, locale);
    },
    staleTime: 1000 * 60 * 5,
  });

  const isStandardEmpty =
    packagesStandardQuery.isFetched && packagesStandardQuery.data?.length === 0;
  const isUnlimitedEmpty =
    packagesUnlimitedQuery.isFetched &&
    packagesUnlimitedQuery.data?.length === 0;

  useEffect(() => {
    if (searchParams.get("tags")) return;

    setSelectedTag(
      isStandardEmpty ? PackageTagEnum.UNLIMITED : PackageTagEnum.STANDARD
    );
  }, [isStandardEmpty, isUnlimitedEmpty]);

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
  const selectedPackage = packagesList.find((p) => p.id === selectedPackageId);

  const handleTagChange = (tag: PackageTagEnum) => {
    if (tag === selectedTag) return;

    setSelectedTag(tag);
    setSelectedPackageId("");

    if (!updateSearchParams) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("tags", tag);
    params.delete("selectedPackage");

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePackageChange = (_selectedPackage: Package) => {
    if (_selectedPackage.id === selectedPackageId) return;

    setSelectedPackageId(_selectedPackage.id);

    if (!updateSearchParams) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("selectedPackage", _selectedPackage.id);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCheckout = () => {
    handleCheckoutClickEvent({
      country_page: location?.placeID ?? "",
      tariff: selectedPackage?.id ?? "",
    });
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
            {t("noPackagesAvailable", {
              location: location?.title || t("location"),
            })}
          </p>
        </div>
        <Link href="/all-destinations" className="text-center">
          <SecondaryButton>{t("chooseAnotherCountry")}</SecondaryButton>
        </Link>
      </div>
    );
  }

  const submitButton = (
    <button
      className={clsx(
        "w-full py-3 xxs:py-4 px-8 bg-secondary-500 rounded-[32px] text-text-900 active:bg-secondary-300 hover:bg-secondary-700 transition duration-200 ease-in-out",
        getTypographyClass(TypographyVariants.Caption)
      )}
      type="submit"
    >
      {t("goToCheckout")}
    </button>
  );

  return (
    <form
      ref={formRef}
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
              {t("standard")}
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
              {t("unlimited")}
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
                discount={calculatePackageDiscount(
                  packageEntity,
                  findHighestPricePerUnit(packagesList, selectedTag),
                  selectedTag
                )}
              />
            ))}
      </div>
      {infoContent}
      {selectedPackage ? (
        <div
          className={`sticky-element ${
            isSticky ? "sticky-active" : "non-sticky"
          }`}
        >
          {submitButton}
          {isSticky && (
            <div className="sticky-block p-4 pb-10">
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Body2),
                  "flex justify-between items-center px-2 py-1 mb-4 hover:bg-[#E9F0F2] transition-colors duration-200 ease-in-out rounded-full cursor-pointer"
                )}
              >
                <span>
                  {selectedPackage.traffic.isUnlimited
                    ? t("unlimitedGB")
                    : `${selectedPackage.traffic.unit.count} ${selectedPackage.traffic.unit.label}`}{" "}
                  {t(selectedPackage.days > 1 ? "days" : "day", {
                    count: selectedPackage.days,
                  })}
                </span>
                <span className="flex gap-2 items-center">
                  {t("currencyPrice", {
                    price: selectedPackage.cost.price / 100,
                    currency: selectedPackage.cost.currency,
                  })}
                  <Image
                    src="/icons/black/chevron-right.svg"
                    alt="Arrow right"
                    width={24}
                    height={24}
                  />
                </span>
              </p>
              {submitButton}
            </div>
          )}
        </div>
      ) : (
        <Skeleton className="w-full h-12 rounded-xl" />
      )}
    </form>
  );
};
