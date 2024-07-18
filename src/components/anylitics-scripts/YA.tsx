"use client";

import { useEffect } from "react";

export const YA = () => {
  useEffect(() => {
    // Yandex Metrica script
    (function (m: any, e: any, t: any, r: any, i: any, k: any, a: any) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = Number(new Date());
      // m[i].l = 1 * new Date();
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(
      window,
      document,
      "script",
      "https://mc.yandex.ru/metrika/tag.js",
      "ym",
      {},
      {}
    );

    (window as any).ym(97865919, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer",
    });
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(97865919, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true,
          ecommerce:"dataLayer"
        });
      `,
      }}
    />
  );
};

export const YANoScript = () => (
  <noscript>
    <div>
      <img
        src="https://mc.yandex.ru/watch/97865919"
        style={{ position: "absolute", left: "-9999px" }}
        alt=""
      />
    </div>
  </noscript>
);
