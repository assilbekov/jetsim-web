import { clsx } from "@/utils";
import "./Skeleton.css";

type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={clsx("skeleton-loader", className ?? "")} />;
};
