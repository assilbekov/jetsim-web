import { clsx } from "@/utils";

type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={clsx("skeleton-loader", className ?? "")} />;
};
