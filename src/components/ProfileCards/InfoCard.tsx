type InfoCardProps = {
  children: React.ReactNode;
};

export const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <div className="py-8 px-6 border-2 border-solid border-[#E9F0F2] rounded-[20px]">
      {children}
    </div>
  );
};
