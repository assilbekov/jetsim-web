import Image from "next/image";

export const BestBadge = () => {
  return (
    <>
      <Image
        src="/icons/primary/best-icon-star.svg"
        alt="best"
        width={32}
        height={24}
        className="xxs:hidden mt-0.5"
      />
      <div className="hidden xxs:flex justify-center items-center bg-[url('/best-rectangle.svg')] bg-cover bg-no-repeat w-[60px] h-[24px] overflow-visible mt-0.5">
        <span className="text-text-900 text-sm leading-[18px] tracking-[0.56px] font-medium">
          BEST
        </span>
      </div>
    </>
  );
};
