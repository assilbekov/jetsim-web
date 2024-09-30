"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";

export const RedirectContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [redirectFailed, setRedirectFailed] = useState(false);

  const handleScriptLoad = useCallback(() => {
    setIsScriptLoaded(true);
    const queryString = searchParams.toString() || window.location.search;
    const customSchemeUrl = `jetsim://google-auth${
      queryString ? `?${queryString}` : ""
    }`;
    router.push(customSchemeUrl);

    const fallbackUrl = `https://jetsim.app/${
      queryString ? `?${queryString}` : ""
    }`;

    const tryCustomScheme = () => {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = customSchemeUrl;
      document.body.appendChild(iframe);

      setTimeout(() => {
        document.body.removeChild(iframe);
        setRedirectFailed(true);
        router.push(fallbackUrl);
      }, 2000);
    };

    tryCustomScheme();
  }, [searchParams]);

  return (
    <>
      <Script src="https://static.app/js/static.js" onLoad={handleScriptLoad} />
      {!isScriptLoaded && <p>Loading necessary resources...</p>}
      {isScriptLoaded && !redirectFailed && (
        <p>Attempting to open the app...</p>
      )}
      {isScriptLoaded && redirectFailed && (
        <p>
          If the app doesn't open, you'll be redirected to the website shortly.
        </p>
      )}
    </>
  );
};
