import { clsx } from "@/utils";

type LandingContainerProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export const LandingContainer = ({
  className,
  children,
  id,
}: LandingContainerProps) => {
  return (
    <div
      className={clsx(
        "xl:max-w-[1440px] lg:max-w-[1200px] w-screen m-auto sm:px-8",
        className || ""
      )}
      id={id}
    >
      {children}
    </div>
  );
};
