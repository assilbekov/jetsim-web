import Image from "next/image";
import { Skeleton } from "../Skeleton";
import { clsx } from "@/utils";

type ArchProps = {
  fill: string;
};

const LeftArch = ({ fill }: ArchProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="277"
      height="796"
      viewBox="0 0 277 796"
      fill="none"
    >
      <path
        d="M276.974 0H0V796H12.8806C5.22901 796 -0.468226 788.935 1.1531 781.457L151.847 86.4255C153.171 80.3207 156.822 74.9726 162.026 71.5172L263.698 4.00631C267.632 1.39362 272.251 0 276.974 0Z"
        fill={fill}
      />
    </svg>
  );
};

const RightArch = ({ fill }: ArchProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="227"
      height="796"
      viewBox="0 0 227 796"
      fill="none"
    >
      <path
        d="M0 0H227V796H36.8691C44.3508 796 50.8335 790.815 52.4779 783.517L225.702 14.6375C227.393 7.1342 221.687 6.80685e-05 213.996 6.74725e-05L0 0Z"
        fill={fill}
      />
    </svg>
  );
};

type BackgroundImageProps = {
  url: string;
  alt: string;
  imageLoaded: boolean;
  archFill: string;
  visibilityClassName?: string;
};

export const BackgroundImage = ({
  url,
  alt,
  imageLoaded,
  archFill,
  visibilityClassName,
}: BackgroundImageProps) => {
  return (
    <div className={clsx("relative -ml-14 -mr-14", visibilityClassName || "")}>
      <div
        className={clsx(
          "absolute top-[-1px] left-[-1px] hidden md:block",
          visibilityClassName || ""
        )}
      >
        <LeftArch fill={archFill} />
      </div>
      {imageLoaded ? (
        <Image
          src={url}
          alt={alt}
          width={1200}
          height={796}
          className={clsx(
            "w-full h-[796px] hidden md:block pb-0.5 pr-0.5",
            visibilityClassName || ""
          )}
          style={{ objectFit: "cover" }}
          priority
        />
      ) : (
        <Skeleton
          className={clsx(
            "w-full h-[796px] hidden md:block pb-0.5 pr-0.5",
            visibilityClassName || ""
          )}
        />
      )}
      <div
        className={clsx(
          "absolute top-[-1px] right-0 hidden md:block",
          visibilityClassName || ""
        )}
      >
        <RightArch fill={archFill} />
      </div>
    </div>
  );
};
