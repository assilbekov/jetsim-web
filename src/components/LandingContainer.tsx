import { clsx } from "@/utils";

type LandingContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const LandingContainer = ({
  className,
  children,
}: LandingContainerProps) => {
  return (
    <div
      className={clsx(
        "xl:max-w-[1440px] lg:max-w-[1200px] w-screen m-auto xs:px-8 px-4",
        className || ""
      )}
    >
      {children}
    </div>
  );
};
