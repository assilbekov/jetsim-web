import Image from "next/image";
import { Skeleton } from "../Skeleton";
import { clsx } from "@/utils";

type ArchProps = {
  fill: string;
  height: number;
  className: string;
};

const LeftArch = ({ fill, className, height }: ArchProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 277 796"
      fill="none"
      height={height}
      className={clsx("w-[101%]", className)}
    >
      <path
        d="M276.974 0H0V796H12.8806C5.22901 796 -0.468226 788.935 1.1531 781.457L151.847 86.4255C153.171 80.3207 156.822 74.9726 162.026 71.5172L263.698 4.00631C267.632 1.39362 272.251 0 276.974 0Z"
        fill={fill}
      />
    </svg>
  );
};

const RightArch = ({ fill, height, className }: ArchProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 227 796"
      fill="none"
      height={height}
      className={clsx("w-[101%]", className)}
    >
      <path
        d="M0 0H227V796H36.8691C44.3508 796 50.8335 790.815 52.4779 783.517L225.702 14.6375C227.393 7.1342 221.687 6.80685e-05 213.996 6.74725e-05L0 0Z"
        fill={fill}
      />
    </svg>
  );
};

type ImageSizeByScreen = {
  height: number;
  width: number;
};

type ImageSizes = {
  sm: ImageSizeByScreen;
  md: ImageSizeByScreen;
  lg: ImageSizeByScreen;
  xl: ImageSizeByScreen;
  xxl: ImageSizeByScreen;
}

type ProfileInviteImageProps = {
  url: string;
  alt: string;
  imageLoaded: boolean;
  archFill: string;
  imgHeight: number;
  imgWidth: number;
};

export const ProfileInviteImage = ({
  url,
  alt,
  imageLoaded,
  archFill,
  imgHeight,
  imgWidth,
}: ProfileInviteImageProps) => {
  return (
    <div className="relative">
      <div className="absolute top-[-1px] left-[-1px]">
        <LeftArch fill={archFill} className={`h-${imgHeight + 2}px`} height={imgHeight + 2} />
      </div>
      {imageLoaded ? (
        <Image
          src={url}
          alt={alt}
          width={imgHeight}
          height={imgWidth}
          objectFit="cover"
          className="h-[400px] w-[400px]"
        />
      ) : (
        <Skeleton className="hidden md:block pb-0.5 pr-0.5" />
      )}
      <div className="absolute top-0 right-0">
        <RightArch fill={archFill} className={`h-${imgHeight + 2}px`} height={imgHeight + 2} />
      </div>
    </div>
  );
};
