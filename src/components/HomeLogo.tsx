import Image from "next/image";
import Link from "next/link";

export const HomeLogo = () => {
  return (
    <Link className="z-[1001]" href="/">
      <Image src="/logo.svg" alt="logo image" width={155} height={36} />
    </Link>
  );
};
