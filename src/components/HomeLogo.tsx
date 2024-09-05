import { Link } from "@/navigation";
import Image from "next/image";

export const HomeLogo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link className="z-[1001]" onClick={onClick} href="/">
      <Image src="/logo.svg" alt="logo image" width={155} height={36} />
    </Link>
  );
};
