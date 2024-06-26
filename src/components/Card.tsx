import { clsx } from "@/utils";

type Size = "sm" | "md" | "lg";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  size?: Size;
};

export const Card = ({ children, className, size = "sm" }: CardProps) => {
  const getSizePadding = (size: Size) => {
    switch (size) {
      case "sm":
        return "p-4 xxs:p-6 sm:p-8 md:p-8 lg:p-12 lg:pt-10";
      case "md":
        return "p-6 sm:p-8 md:p-12 lg:p-12 lg:pt-10";
      case "lg":
        return "py-8 px-6 xxs:px-8 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:p-12";
    }
  };

  return (
    <div
      className={clsx(
        "bg-text-900 sm:border sm:border-[#E6EFF2] sm:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] sm:rounded-[20px]",
        getSizePadding(size),
        className || ""
      )}
    >
      {children}
    </div>
  );
};
