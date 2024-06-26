import { createContext, useContext, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your tracking ID

const GoogleAnalyticsContext = createContext(null);

type GoogleAnalyticsProviderProps = {
  children: React.ReactNode;
};

export const GoogleAnalyticsProvider = ({
  children,
}: GoogleAnalyticsProviderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const localWindow: any = typeof window !== "undefined" ? window : null;

  useEffect(() => {
    if (localWindow.gtag) {
      localWindow.gtag("config", GA_TRACKING_ID, {
        page_path: `${pathname}${
          searchParams.toString() ? "?" + searchParams.toString() : ""
        }`,
      });
    }
  }, [pathname, searchParams]);

  return (
    <GoogleAnalyticsContext.Provider value={null}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      {children}
    </GoogleAnalyticsContext.Provider>
  );
};

export const useGoogleAnalytics = () => useContext(GoogleAnalyticsContext);
