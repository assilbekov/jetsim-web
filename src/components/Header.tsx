export enum HeadersVariant {
  H1 = "h1",
  H2 = "h2",
}

type HeaderProps = {
  children: React.ReactNode;
  variant: HeadersVariant;
};

export const Header = ({ children, variant }: HeaderProps) => {
  const getVariantClassNames = () => {
    switch (variant) {
      case HeadersVariant.H1:
        return "text-[56px] font-medium leading-[64px] text-primary-100";
      case HeadersVariant.H2:
        return "text-[34px] font-medium leading-[38px] text-text-100";
    }
  };

  return <h2 className={getVariantClassNames()}>{children}</h2>;
};
