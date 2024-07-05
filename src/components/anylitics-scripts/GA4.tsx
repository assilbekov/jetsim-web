"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA4_ID = "G-TG5HZCCKZE"; // Replace with your Google Analytics Measurement ID

export const GA4 = () => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      (window as any).gtag("event", "page_view", {
        page_path: url,
      });
    };

    const handleRouteChangeComplete = () => {
      handleRouteChange(window.location.pathname + window.location.search);
    };

    window.addEventListener("popstate", handleRouteChangeComplete);
    handleRouteChangeComplete();

    return () => {
      window.removeEventListener("popstate", handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      ></script>
      <script
        id="ga4"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `,
        }}
      ></script>
    </>
  );
};
