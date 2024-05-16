import { clsx } from "@/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "sm:bg-text-900 sm:border sm:border-[#E6EFF2] sm:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] sm:p-8 md:p-12 rounded-[20px] p-4",
        className || ""
      )}
    >
      {children}
    </div>
  );
};
