import Image from "next/image";

type IconWithTextProps = {
  src: string;
  alt: string;
  text: string;
};

export const IconWithText = ({ src, alt, text }: IconWithTextProps) => {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src={src} alt={alt} width={24} height={24} />
      {text}
    </span>
  );
};
