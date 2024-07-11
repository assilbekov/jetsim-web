"use client";

import { useEffect } from "react";

const GA4_ID = "G-TG5HZCCKZE"; // Replace with your Google Analytics Measurement ID

export const GA4 = () => {
  useEffect(() => {
    const localWindow = window as any;

    const handleRouteChange = (url: string) => {
      if (!localWindow.gtag) return;

      localWindow.gtag("event", "page_view", {
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
            gtag('config', '${GA4_ID}', { 'debug_mode': true });
          `,
        }}
      ></script>
    </>
  );
};
