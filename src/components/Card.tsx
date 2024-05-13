import { clsx } from "@/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-text-900 border border-[#E6EFF2] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] p-12 rounded-[20px]",
        className || ""
      )}
    >
      {children}
    </div>
  );
};
