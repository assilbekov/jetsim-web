type StyledContentProps = {
  children: React.ReactNode;
};

export const StyledContent = ({ children }: StyledContentProps) => {
  return (
    <div className="flex flex-col gap-8 justify-center self-stretch py-8 px-4 mx-auto w-full rounded-2xl bg-slate-50">
      {children}
    </div>
  );
};
