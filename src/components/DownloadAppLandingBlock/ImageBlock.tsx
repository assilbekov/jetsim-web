"use client";

import { useDeviceTypeAndVersion } from "@/hooks/useDeviceTypeAndVersion";
import Image from "next/image";

export const ImageBlock = () => {
  const { isDesktop } = useDeviceTypeAndVersion();

  return (
    <div className="flex justify-center relative">
      {isDesktop ? (
        <div className="w-full pb-8">
          <Image
            src="/images/appstore-ios-qr.png"
            alt="Download JetSim App"
            width={272}
            height={558}
            className="w-full"
          />
        </div>
      ) : (
        <div className="overflow-hidden h-[312px] xxs:h-[375px] mx-auto">
          <Image
            src="/images/iphone-ios-app-screenshot.png"
            alt="Download JetSim App"
            width={272}
            height={558}
            className="w-[272px] xxs:w-[327px] sm:w-[305px]"
          />
        </div>
      )}
      <div className="absolute bottom-0 right-[-140px] hidden md:block">
        <Image
          src="/images/iphone-ios-app-promotion-person.png"
          alt="Download JetSim App promotion person"
          width={156}
          height={52}
          className="h-full"
        />
      </div>
    </div>
  );
};
