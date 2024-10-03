"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const RedirectContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [redirectFailed, setRedirectFailed] = useState(false);

  useEffect(() => {
    const queryString = searchParams.toString() || window.location.search;
    const customSchemeUrl = `jetsim://google-auth${
      queryString ? `?${queryString}` : ""
    }`;
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
      {!redirectFailed ? (
        <p>Attempting to open the app...</p>
      ) : (
        <p>
          If the app does not open, you will be redirected to the website
          shortly.
        </p>
      )}
    </>
  );
};
