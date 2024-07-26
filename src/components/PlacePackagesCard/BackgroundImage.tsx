import Image from "next/image";
import { Skeleton } from "../Skeleton";

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
};

export const BackgroundImage = ({
  url,
  alt,
  imageLoaded,
  archFill,
}: BackgroundImageProps & { archFill: string }) => {
  return (
    <div className="relative -ml-14 -mr-14">
      <div className="absolute top-0 left-0 hidden md:block">
        <LeftArch fill={archFill} />
      </div>
      {imageLoaded ? (
        <Image
          src={url}
          alt={alt}
          width={1200}
          height={796}
          className="w-full h-[796px] hidden md:block pb-0.5 pr-0.5"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <Skeleton className="w-full h-[796px] hidden md:block pb-0.5 pr-0.5" />
      )}
      <div className="absolute top-0 right-0 hidden md:block">
        <RightArch fill={archFill} />
      </div>
    </div>
  );
};
