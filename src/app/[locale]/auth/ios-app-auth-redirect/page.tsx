"use client";

import React, { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";

const Redirect: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const handleScriptLoad = useCallback(() => {
    setIsScriptLoaded(true);
    const queryString = searchParams.toString() || window.location.search;
    router.push(`jetsim://google-auth${queryString ? `?${queryString}` : ""}`);
  }, [searchParams]);

  return (
    <div>
      <Script src="https://static.app/js/static.js" onLoad={handleScriptLoad} />
      <p>{isScriptLoaded ? "Redirecting..." : "Loading..."}</p>
    </div>
  );
};

export default Redirect;
