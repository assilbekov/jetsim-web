import { clsx } from "@/utils";

type InfoCardProps = {
  className?: string;
  children: React.ReactNode;
};

export const InfoCard = ({ className, children }: InfoCardProps) => {
  return (
    <div
      className={clsx(
        "py-8 px-6 border-2 border-solid border-[#E9F0F2] rounded-[20px]",
        className ?? ""
      )}
    >
      {children}
    </div>
  );
};
