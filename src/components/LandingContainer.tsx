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
        "xl:max-w-[1440px] lg:max-w-[1200px] w-screen m-auto sm:px-8",
        className || ""
      )}
    >
      {children}
    </div>
  );
};
