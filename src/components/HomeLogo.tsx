import Image from "next/image";
import Link, { LinkProps } from "next/link";

export const HomeLogo = (props: LinkProps) => {
  return (
    <Link className="z-[1001]" {...props} href="/">
      <Image src="/logo.svg" alt="logo image" width={155} height={36} />
    </Link>
  );
};
