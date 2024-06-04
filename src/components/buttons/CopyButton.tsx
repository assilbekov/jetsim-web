import Image from "next/image";
import { SecondaryButton } from "./SecondaryButton";
import { useState } from "react";

export const CopyButton = ({
  text,
  ...restProps
}: { text: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [content, setContent] = useState("Copy");
  return (
    <SecondaryButton
      {...restProps}
      onClick={() => {
        navigator.clipboard.writeText(text);
        setContent("Copied!");
        setTimeout(() => setContent("Copy"), 500);
      }}
    >
      <div className="flex justify-center gap-2">
        <Image
          loading="lazy"
          src="/icons/copy.svg"
          width={20}
          height={20}
          alt="copy icon"
          className="shrink-0 self-start w-5 aspect-square"
        />
        <div>{content}</div>
      </div>
    </SecondaryButton>
  );
};
