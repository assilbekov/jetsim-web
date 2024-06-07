import { clsx } from "@/utils";

type ProgressBarProps = {
  progress: number;
  className?: string;
};
export const ProgressBar = ({ progress, className }: ProgressBarProps) => {
  return (
    <div className={clsx("flex gap-3 max-md:flex-wrap", className ?? "")}>
      {Array.from({ length: 5 }).map((_, index) => {
        const ceiled = Math.ceil(progress / 20);
        const curIdx = index + 1;

        const width =
          ceiled === curIdx
            ? `${
                progress / 20 === ceiled ? 100 : ((progress % 20) * 100) / 20
              }%`
            : ceiled > curIdx
            ? "100%"
            : "0%";

        return (
          <div className="flex-1 shrink-0 h-1.5 bg-[#E9F0F2] rounded-full dark:bg-gray-700">
            <div
              className="bg-primary-500 h-1.5 rounded-full"
              style={{
                width,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export const ProgressBarSignleLine = ({
  progress,
  className,
}: ProgressBarProps) => {
  const width = `${progress}%`;
  return (
    <div
      className={clsx(
        "flex-1 shrink-0 h-1.5 bg-[#E9F0F2] rounded-full dark:bg-gray-700",
        className ?? ""
      )}
    >
      <div
        className="bg-primary-500 h-1.5 rounded-full"
        style={{
          width,
        }}
      />
    </div>
  );
};
