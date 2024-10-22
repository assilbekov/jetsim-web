"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { REFERRALS_FEATURE_FLAG } from "@/constants";

type FeatureFlags = {
  [REFERRALS_FEATURE_FLAG]: boolean;
};

const FeatureFlagsContext = createContext<FeatureFlags | undefined>(undefined);

export const useFeatureFlags = () => {
  const searchParams = useSearchParams();
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags>({
    [REFERRALS_FEATURE_FLAG]: false,
  });
  console.log({featureFlags, searchParams});

  useEffect(() => {
    const urlFlags = searchParams.get("flags");
    if (urlFlags) {
      const parsedFlags = urlFlags.split(",").reduce((acc, flag) => {
        acc[flag as keyof FeatureFlags] = true;
        return acc;
      }, {} as FeatureFlags);
      setFeatureFlags((prevFlags) => ({ ...prevFlags, ...parsedFlags }));
    }
  }, [searchParams]);

  return featureFlags;
};

export const useFeatureFlag = (flag: keyof FeatureFlags) => {
  const featureFlags = useFeatureFlags();
  return featureFlags[flag];
};

export const FeatureFlagsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const featureFlags = useFeatureFlags();

  return (
    <FeatureFlagsContext.Provider value={featureFlags}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};
