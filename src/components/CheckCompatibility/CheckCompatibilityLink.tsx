import { clsx } from "@/utils";
import Link from "next/link";
import { TypographyVariants, getTypographyClass } from "../Typography";

type CheckCompatibilityLinkProps = {
  label: React.ReactNode;
  hideIcon?: boolean;
  className?: string;
  onClick: () => void;
};

export const CheckCompatibilityLink = ({
  label,
  className,
  onClick,
  hideIcon,
}: CheckCompatibilityLinkProps) => {
  return (
    <button
      className={clsx(
        "flex group gap-1 text-secondary-500 hover:text-secondary-300 transition duration-200 ease-in-out",
        getTypographyClass(TypographyVariants.Caption),
        className ?? ""
      )}
      onClick={onClick}
    >
      {label}
      {!hideIcon && (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow right">
            <path
              id="background"
              d="M13.625 10.75H4.5V9.25H13.625L9.4375 5.0625L10.5 4L16.5 10L10.5 16L9.4375 14.9375L13.625 10.75Z"
              className="fill-secondary-500 group-hover:fill-secondary-300 transition duration-200 ease-in-out"
            />
          </g>
        </svg>
      )}
    </button>
  );
};
