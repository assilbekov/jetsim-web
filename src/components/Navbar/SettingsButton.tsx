import { clsx } from "@/utils";

export const SettingsButton = ({
  children,
  className,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...restProps}
      className={clsx(
        "w-full border-b border-gray-200 last:border-0 m-4 hover:bg-[#C3D4D9] active:bg-[#EDF1F2] transition duration-100 ease-in-out disabled:bg-[#FFE0D1] disabled:cursor-not-allowed",
        className ?? ""
      )}
    >
      {children}
    </button>
  );
};
