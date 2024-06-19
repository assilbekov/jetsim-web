import { clsx } from "@/utils";

type InfoRowProps = {
  children: React.ReactNode;
  className?: string;
};

export const InfoRow = ({ children, className }: InfoRowProps) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 justify-center",
        className ?? ""
      )}
    >
      {children}
    </div>
  );
};
