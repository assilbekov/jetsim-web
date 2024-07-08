"use client";

import { useEffect } from "react";

const PIXEL_ID = "2669054566608624"; // Replace with your Pixel ID

export const Facebook = () => {
  useEffect(() => {
    const localWindow: any = window;
    if (typeof window !== "undefined") {
      localWindow.fbq("init", PIXEL_ID);
      localWindow.fbq("track", "PageView");

      const handleRouteChange = () => {
        localWindow.fbq("track", "PageView");
      };

      localWindow?.addEventListener("popstate", handleRouteChange);
      handleRouteChange();

      return () => {
        localWindow?.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, []);

  return (
    <>
      <script
        id="facebook-pixel"
        //strategy="afterInteractive"
        async
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
          `,
        }}
      ></script>
    </>
  );
};

export const FacebookNoScript = () => {
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
};
